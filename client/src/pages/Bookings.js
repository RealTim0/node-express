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
        const response = await fetch("http://localhost:5000/booking",{
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
        <div className="home">
            <div className="bookings">
            {bookings.map((booking) => (
            <div className="bookings-details" key={booking._id}>
              <h4>{booking.name}</h4>
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
              <span>🚮</span>
            </div>
          ))}
           </div>
        </div>
    )}else{
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
 