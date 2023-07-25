import {Link} from "react-router-dom"

import { useState } from "react"
import Profile from '../pages/Profile'

export default function Navbar(){
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
    return(
        <div className="navbar">
            <div className='divanav'>
                <Link to="/home"> 
                <img style={style}
                    src="https://cdn.freelogodesign.org/files/f587fa9aa6ec45eda32fa4ab57476b3e/thumb/logo_200x200.png?v=638258079860000000" alt="" />
                    </Link>
                    <span
                    style={{
                        fontSize:'1.6rem',
                        padding:'30px -10px  0 0',
                        margin:'10px'
                    }}>welcome.username</span>
            </div>
            <div className={click}>
            <nav>
                <ul className="ul">
                    <li><Link to="/bookings">Bookings</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link> </li>
                    <li><button onClick={handleClick}>👦🏿</button></li>
                </ul>
  
            </nav>
            </div>
                <button  className="mainmenu" onClick={handleClick}>{isClicked ?'❌':'⭕'}</button>
        
        </div>
    )
}