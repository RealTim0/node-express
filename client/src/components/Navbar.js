import {Link} from "react-router-dom"
import 'boxicons'
import Profile from '../pages/Profile'




export default function Navbar(){
  function handleClick(){
    let profile = <Profile />
        if(profile.style.display="none"){
            profile.style.display="block"
        }else{
            profile.style.display="none"
        }
        
    } 
    
    return(
        <div className="navbar">
            <div className='divanav'>
            <Link to="/home"> <img style={{
                borderRadius:'50%',
                textAlign:'center',
                width:'55px'

            }}
            
             src="https://cdn.freelogodesign.org/files/f587fa9aa6ec45eda32fa4ab57476b3e/thumb/logo_200x200.png?v=638258079860000000" alt=""/></Link>
            </div>
            <div className='divbnav'>
            <nav>
            <Link to="/about">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Login</Link>
            <button onClick={handleClick}><box-icon type='solid' name='face'></box-icon></button>
        </nav>
         {/* <div style={style} className="profiletab">profile  <button  onClick={handleClick} ><box-icon type='solid' name='face'></box-icon></button></div>  */}
        </div>
        </div>
    )
}