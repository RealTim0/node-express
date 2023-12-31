import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading'


export default function Contact () {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[subject, setSubject] = useState('')
  const[message, setMessage] = useState('')
  const[error, setError] = useState('')
  const[isLoading, setIsLoading]= useState(false)
  const navigate = useNavigate()
  
  
  const handleSubmit = async (e) => { 
    e.preventDefault();
    setIsLoading(true)
   const response =  await fetch('https://riri-car-repair-backend.vercel.app/api/contact', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({name,email,subject,message})  
            })
              if(response.ok){
                setIsLoading(false)
                alert('Your message has been received and an email will be sent to you with the response sent.Thankyou!')
                console.log("ssffs")
              setEmail("")
              setMessage('')
              setSubject('')
              setName('')
              navigate("/home")
              }
            
            
            if(!response.ok){
              setIsLoading(false)
                setError(error)
                console.log(error)
            }
            
            }
     const handleReset = () => {
     
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        
     }       
  if(isLoading){
    return(<Loading />)}
  else if(!isLoading){
    return (
   <div>
     
      <form onSubmit={handleSubmit} className='contact'>
      <h2>Contact Us</h2>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <label >Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <label >Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e)=>setSubject(e.target.value)}
            required
          />
          <label >Message:</label>
          <textarea
          rows={20}
          cols={40}
            id="message"
            name="message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            required
          ></textarea>
          <span
          style={{
            display:'flex'
          }}
          >
            <button  disable={isLoading} style={{
              marginRight:'5px'
            }}type='submit'>Send Message</button>

        <button type='reset' onClick={handleReset}>Reset</button>
        {error && <div>{error}</div>}
       
        </span>
      </form>
    </div>
  )

  }
}
