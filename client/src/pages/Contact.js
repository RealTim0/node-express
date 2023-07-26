import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
    await fetch('http://localhost:5000/contact', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({name,email,subject,message})  
            })
    
            .then((response)=> {
              if(response.ok){
                setIsLoading(true)
                alert('Your message has been received and an email will be sent to you with the response sent.Thankyou!')
                console.log("ssffs")
              setEmail("")
              setMessage('')
              setSubject('')
              setName('')
              navigate("/home")
              response.json()}})
            
            .then((data)=>{
              console.log(data)
            })
            .catch((error)=>{
              setIsLoading(false)
                setError(error)
                console.log(error)
            })
            
            }
     const handleReset = () => {
     
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        
     }       
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
            <button  style={{
              marginRight:'5px'
            }}type='submit'>Send Message</button>
        <button type='reset' onClick={handleReset}>Reset</button>
        </span>
      </form>
    </div>
  )

}