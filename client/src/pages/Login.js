import { useState } from 'react' 
import {Link} from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import Loading from '../components/Loading'

export default function Login (){
    const[email, setEmail]  = useState('')
    const[password, setPassword]  = useState('')
    const {login, error, isLoading} = useLogin() 

    const handleSubmit = async (e) =>{
        e.preventDefault()
       await login(email, password) 
    }
     if(!isLoading){return(
        <form  className='login' onSubmit={handleSubmit} >
            <h3>Login</h3>
            <label>Email:</label>
            <input
            
                type='email'
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Email"
                value={email}
            />
           <label>Password:</label>
            <input
           
                type='password'
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Password"
                value={password}
            />
                <button disabled={isLoading}>Login</button>
                <p>You don't have an account? <Link to="/signup">Signup</Link></p>
                
                {error && <div className='error'>{error}</div>} 
        </form>
    )}else if(isLoading){
        return(<Loading />)
    } 
    
}
