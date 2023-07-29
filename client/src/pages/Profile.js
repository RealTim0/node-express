import {useAuthContext} from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import{useNavigate} from 'react-router-dom'
import{useState} from 'react'
import Loading from "../components/Loading"


export default function Profile(){
    const {user } = useAuthContext()
    const{logout} = useLogout()
    const navigate = useNavigate()
    const[error, setError] = useState(null)
    const[isLoading, setIsLoading] = useState(null)
    function handleLogout(){
        logout()
    }
    const handleClick = async() =>{
        const result = window.confirm('Are you sure you want to delete your account,action is IRREVERSIBLE!')
        if(result === true){
            handleDelete()
        }else{
            navigate("/profile")
        }
    }
    const handleDelete = async() =>{
        setIsLoading(true)
        const response = await fetch('https://riri-car-repair-backend.vercel.app/api/user/delete/' + user.id ,{
            method:'DELETE',
            headers:{
               'Authorization' : `Bearer ${user.token}`,
               'Content-Type':'application/json'
            }
        })
        
        
        if(response.ok){
            setIsLoading(false)
            alert('Account deleted successfuly, Sorry to see you leave')
            handleLogout()
            navigate('/')
        }
        if(!response.ok){
            setIsLoading(false)
            setError(error)
            alert(error, 'Kindly Share the reason for wanting to delete your account')
            navigate('/home')
            
        }

    }

   if(isLoading){
       return (<Loading />)
           }
    else if(!isLoading){
         return(
        <div className="profiletab">
            <div className='prosection'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKpQUy8JP90MAZxFjU0P9bPqkUWL35fd8Ag&usqp=CAU' alt='' />

            <h3>Name: <strong>{user.name}</strong></h3>
            <h3>Email: <strong>{user.email}</strong></h3>
            <h3>Password : <strong>password</strong></h3>

            <button onClick={handleLogout} style={{
                        border:'2px green solid',
                        fontSize:'1.2rem',
                        color:'black',
                        backgroundColor:'whitesmoke',
                        padding:'2.5px',
                        borderRadius:'3px',
                        cursor:'pointer'
                    }}>logout</button>
                    
                    <h4 >
                        <button onClick={handleClick} style={{
                        border:'2px red solid',
                        fontSize:'1.2rem',
                        color:'red',
                        backgroundColor:'pink',
                        padding:'2.5px',
                        borderRadius:'3px',
                        cursor:'pointer'
                    }}>Delete Account</button></h4>
        </div>
        </div>
    )
    }
}
