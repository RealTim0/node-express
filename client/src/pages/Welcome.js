import React from "react"
import  {Link} from "react-router-dom"



export default function Welcome(){
    return(
        <div className="welcomepage">
            <div className="welcomepageimg">
            <img src="https://img.freepik.com/premium-photo/3d-render-gear-white-background_461160-6199.jpg" alt="Gears"  width="500px" height="500px"/>
            </div>
            <div className="welcomepagetext">
            <h2>Quality Services</h2>
            <Link to="/signup">Join Us</Link>
            <p> For an experience like never before</p>
            </div>
            
        </div>
    )
}