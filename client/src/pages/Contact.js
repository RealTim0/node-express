import { useState } from 'react';


export default function Contact () {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[subject, setSubject] = useState('')
  const[message, setMessage] = useState('')
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
   
  };

  return (
   <>
     
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
       
        <button>Send Message</button>
      </form>
    </>
  )
}


