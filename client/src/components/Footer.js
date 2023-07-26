import React from 'react'
import 'boxicons'
import { useAuthContext } from '../hooks/useAuthContext'

const Footer = () => {
  const {user} = useAuthContext()
  let currentYear = new Date().getFullYear()
 if(user)
  {return (
    <div className='footer'>
      <h3>We are social!</h3>
      <hr style={{
        color:'black',
        width:'140px',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)'
      }}></hr>
      <div className='footerdiv'>
        <span><a href="https://instagram.com/therealtimo._?igshid=Y2M0YTlkZGNmOQ==" ><box-icon name='instagram' type='logo' color='#e80b0b' ></box-icon></a></span>
        <span><a href='https://twitter.com/Real_tim0?t=igQsKKAEvugAST4-LyGwMg&s=09'><box-icon name='twitter' type='logo' color='#07a5f6' ></box-icon></a></span>
        <span><a href="http://wa.me/qr/4FZPD27S7GCRD1"><box-icon name='whatsapp' type='logo' color='#0bf607' ></box-icon></a></span>
        <span><a href="https://www.linkedin.com/in/gem-timo-9951a9272"><box-icon name='linkedin-square' type='logo' color='#0413fa' ></box-icon></a></span>
        <span>< a href='tel:+254704386'><box-icon name='phone'></box-icon></a></span>
        <span><a href="mailto:gemtimo994@gmail.com" ><box-icon name='mail-send' color='#faa604' ></box-icon></a></span>
        <span><a href="https://www.facebook.com/tmothy.mwangi"><box-icon name='facebook' type='logo' color='#0413fa'></box-icon></a></span>
      </div>
      <p>&copy;{currentYear} RIRI Car Repair Shop . All Right Reserved</p>
      <p><a href='https://www.capitalandautoservice.com/terms'>Terms and Conditions apply.</a></p>
      <p><a href='https://www.capitalandautoservice.com/privacy' >Privacy Policy.</a></p>
    </div>
    )
 }else{
  return null
 }
  
}

export default Footer