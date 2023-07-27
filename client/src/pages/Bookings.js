import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect } from "react"
import { useBookingsContext } from "../hooks/useBookingContext"
import {useAuthContext} from "../hooks/useAuthContext"
import {Link} from 'react-router-dom'

const Bookings = () =>{
    const {bookings, dispatch} = useBookingsContext()
    const {user} = useAuthContext()
    
   
    
   useEffect(()=>{
    const fetchbookings = async()=>{
        const response = await fetch("https://riri-car-repair-backened.vercel.app/api/booking",{
            headers:{
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const bookings = await response.json()


        if(response.ok){
          dispatch({type:'GET_BOOKINGS', payload:bookings})  
        }
        }
    if(user){
    fetchbookings()
   }
    },[dispatch, user])
    

    if(bookings){
      return(
        <div style={{
          height:'100%'
        }}className="home">
            <div className="bookings">
            {bookings.map((booking) => (
            <div className="bookings-details" key={booking._id}>
             {/* <span style={{
              display:'flex',
              justifyContent:'space-around'
             }}> */}<h4>{booking.name}</h4>{/*  <span onClick={handleClick} style={{
              backgroundColor:'greenyellow',
              border:'none',
              borderRadius:'5px',
              padding:'4px',
              cursor:'pointer'
             }}>mark as done</span></span> */} 
              <p>
                <strong>Car model and Service: </strong>
                {booking.model} , {booking.service}
              </p>
              <p>
                <strong>Phone:</strong> {booking.phone}
              </p>
              <p>
                <strong>Appointment Date:</strong> {booking.appointmentDate}
              </p>
              <p>{formatDistanceToNow(new Date(booking.createdAt), { addSuffix: true })}</p>
              
            </div>
          ))}
           </div>
          <div className='bookings' stle={{
            margin:'10px',

          }}><Link to='/booking'>Add Booking</Link></div>

        </div>
    )}else if(!bookings){
      return(<div className='bookingshome' style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
      }}>
        <div className='bookings'><Link to='/booking'>Book Now</Link></div></div>
      )
    }
}
export default Bookings
 
