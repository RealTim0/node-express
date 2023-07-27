import React, { useState } from 'react';
import {useAuthContext} from '../hooks/useAuthContext'
import {useBookingsContext} from '../hooks/useBookingContext'
import {useNavigate} from'react-router-dom'

const BookingForm = () => {
  const {user} = useAuthContext()
  const {dispatch} = useBookingsContext()
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[model, setModel] = useState('')
    const[phone, setPhone] = useState('')
    const[service, setService] = useState('')
    const[appointmentDate, setAppointmentDate] = useState('')
    const[error, setError] = useState(null)
    const navigate = useNavigate()  
    const handleSubmit = async (e)=>{
      e.preventDefault()

      const response = await fetch("https://riri-car-repair-backend.vercel.app/api/booking",{
          method:'POST',
          body:JSON.stringify({name, email, model, phone, service, appointmentDate}),
          headers:{
              'Content-Type':"application/json",
              'Authorization' : `Bearer ${user.token}`
          } 
      })

      const json = await response.json()

      if(!response.ok){
          setError(json.error)
      }
      if(response.ok){
          setError(null)
          setName("")
          setEmail('')
          setPhone('')
          setModel("")
          setService("")
          setAppointmentDate('')
          console.log("successful😁")
          dispatch({type:'CREATE_BOOKING', payload:json})
          navigate('/bookings')
      }
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit} className='booking'>
      <h2>Car Service Booking Form</h2>
        
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            required
          />
          <label htmlFor="email">Car Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={model}
            onChange={(e)=>setModel(e.target.value)}
            required
            placeholder='eg Toyota Wish'
          />
          <label htmlFor="service">Preferred Service:</label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e)=>setService(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Spray Painting">Spray Painting</option>
            <option value="Tire change">Tire change</option>
            <option value="Vaccum cleaning">Vaccum cleaning</option>
            <option value="Other">Other</option>
            
          </select>
        <br />
        
          <label htmlFor="appointmentDate">Preferred Appointment Date:</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={appointmentDate}
            onChange={(e)=>setAppointmentDate(e.target.value)}
            required
          />
        <button type="submit">Book Now</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  );
};

export default BookingForm;
