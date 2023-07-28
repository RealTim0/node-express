import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';

const About = () => {
  const [clicked, setClicked] = useState(true)
  const style =` ${clicked ? 'active' : 'question-container'}`
  const {user} = useAuthContext()
  const handleClick = (i) =>{
    
      setClicked(!clicked)
    }
    const data = [
      {id:1 , question:'How are payments made' , answer:'Currently we only do cash and after service delivery . Soon enough we will have mobile money transfer.'}
      {id:2 , question:'What's the importance of collecting my personal details?' , answer:'Please take a look at ou Terms and conditions and our privacy policy at the bottom ofthe page.'}
      {id:3 , question:'How come I have not received an email' , answer:'>Emails take a while before they are sent .Kindly wait two hours .If issue still peresists please reach to us here <a href="mailto:info.riricarrepair@gmail.com" >🔗</a>'}
    ]
  return (
    <div className='about'>
      <div className="homelogo">
            <img style={{
                borderRadius:'50%',
                textAlign:'center',
                width:'200px'

            }}
            
             src="https://cdn.freelogodesign.org/files/f587fa9aa6ec45eda32fa4ab57476b3e/thumb/logo_200x200.png?v=638258011500000000" alt=""/>
             </div>
             <div className='abouttext'>
      <h2>About Us</h2>
      <hr></hr>
      <p>
        Welcome to <strong>RIRI Car Repair Shop </strong> – Your Trusted Car Care Experts!
      </p>
      <p>
        At <strong>RIRI Car Repair Shop </strong>, we take pride in being a leading car repair and maintenance service provider dedicated to delivering exceptional automotive services to our valued customers. With years of experience and a team of skilled technicians, we are committed to keeping your vehicle running smoothly and safely on the road.
      </p>
      <br></br>
      <h3>Our Mission:</h3>
            <hr></hr>
      <p>
        Our mission is to provide top-notch car repair and maintenance services with a focus on customer satisfaction, quality workmanship, and fair pricing. We aim to build long-lasting relationships with our customers based on trust and reliability.
      </p>
      <br></br>
      <h3>Why Choose Us?</h3>
      <hr></hr>
      <ul>
        <li><strong>Expert Technicians:</strong> Our team of highly trained and certified technicians possesses extensive knowledge and experience in diagnosing and repairing a wide range of vehicle issues.</li>
        <li><strong>State-of-the-Art Facility:</strong> We have invested in the latest diagnostic equipment and advanced tools to ensure accurate and efficient vehicle repairs.</li>
        <li><strong>Quality Parts:</strong> We use only genuine, high-quality parts to guarantee the best performance and longevity for your vehicle.</li>
        <li><strong>Personalized Service:</strong> We treat each customer and vehicle with the utmost care, providing personalized attention and tailored solutions. See more <Link to='/services'>here</Link></li>
        <li><strong>Competitive Pricing:</strong> We offer fair and transparent pricing, ensuring you get excellent value for your investment in car repair and maintenance.</li>
      </ul>
      <br></br>
      <h3>Experience the Difference:</h3>
      <hr></hr>
      <p>
        At <strong>RIRI Car Repair Shop Name</strong>, we understand the importance of a well-maintained vehicle. We are dedicated to providing superior service and exceptional results that exceed your expectations. Trust us with your car, and you'll experience the difference of working with a car repair shop that truly cares about your vehicle and your satisfaction.
      </p>
      <p>
        Contact us today to schedule an appointment or speak with our friendly team about your car's needs. We look forward to serving you and keeping your vehicle in peak condition!
      </p>
      <br></br>
      <h3>Reach us:</h3>
      <div>
        <strong>Address:</strong> <address>
      <strong>RIRI Car Repair Shop</strong><br />
       P.O Box 3567<br />
      Nanyuki, 10400<br />
      Kenya<br />
    </address><br />
        { user && <><strong>Phone:</strong> < a href='tel:+254704386'>🔗</a><br />
        <strong>Email:</strong> <a href="mailto:info.riricarrepair@gmail.com" >🔗</a><br />
        <strong>Website:</strong> < a href='https://riri-car-repair-shop-frontend.vercel.app/'>🔗</a></>}
      </div>
      
      <div className="faq">
        <h2>FAQ</h2>
{ data.map((data) =>(
        <div key={data.id} onClick={handleClick} className={style}>
            <div className="question">{data.question}</div>
            <div className="answer">{data.answer}</div>))}
        </div>
    </div>
    </div>
    </div>
  );
};

export default About;
