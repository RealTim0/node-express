import {Link} from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"


export default function Navbar(){
    const {user} = useAuthContext()
    const {logout} = useLogout()
    const[isClicked, setIsClicked] = useState(false)
    const click =` ${isClicked ? 'listnav' : 'divbnav'}`
  function handleClick(){
    setIsClicked(!isClicked)
    } 

   let style={
    borderRadius: '50%',
    textAlign: 'center',
    width: '55px'
}
function handleLogout(){
    logout()
}

    return(
        <div className="navbar">
            <div className='divanav'>
                <Link to="/home"> 
                <img style={style}
                    src="https://cdn.freelogodesign.org/files/f587fa9aa6ec45eda32fa4ab57476b3e/thumb/logo_200x200.png?v=638258079860000000" alt="" />
                    </Link>
                   {user && <span
                    style={{
                        fontSize:'1.6rem',
                        padding:'30px -10px  0 0',
                        margin:'10px'
                    }}>Hello, {user.name}.</span>}
            </div>
            <div className={click}>
            <nav>
                <ul className="ul">
                {user && <li><Link to="/bookings">Bookings</Link></li>}
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    {user && <li><Link to="/contact">Contact</Link></li> }
                      {!user && <li><Link to="/login">Login</Link> </li> }
                      {user && <li><Link to="/profile">👤</Link> </li> }
                    {user &&<li><button onClick={handleLogout} style={{
                        border:'2px green solid',
                        fontSize:'1.2rem',
                        color:'black',
                        backgroundColor:'whitesmoke',
                        padding:'2.5px',
                        borderRadius:'3px',
                        cursor:'pointer'
                    }}>logout</button></li>}
                </ul>
  
            </nav>
            </div>
                <button  style={{
                    cursor:'pointer'
                }}className="mainmenu" onClick={handleClick}>{isClicked ?'❌':'⭕'}</button>
        
        </div>
    )
}