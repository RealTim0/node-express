import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const About = () => {
  const [clicked, setClicked] = useState(true)
  const style =` ${clicked ? 'active' : 'question-container'}`
  const handleClick = (i) =>{
    
      setClicked(!clicked)
    }
    
  

 
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
      <p>
        <strong>Address:</strong> <address>
      <strong>RIRI Car Repair Shop</strong><br />
       P.O Box 3567<br />
      Nanyuki, 10400<br />
      Kenya<br />
    </address><br />
        <strong>Phone:</strong> < a href='tel:+254704386'>+254 (707)123 5555</a><br />
        <strong>Email:</strong> <a href="mailto:gemtimo994@gmail.com" >info@RIRIcarrepair.com</a><br />
        <strong>Website:</strong> Website URL
      </p>
      
      <div className="faq">
        <h2>FAQ</h2>
      <div onClick={handleClick} className={style}>
            <div   className="question">What's the importance of collecting my personal details?</div>
              <div className='answer'>Please take a look at ou Terms and condition and aour privacy policy at the ottom ofthe page
             </div>
        </div>
        <div onClick={handleClick} className={style}>
            <div className="question">What are the subscription rates?</div>
            <div className="answer">$1000 - promax$800 - proplu$500 - pro$200 - regular</div>
        </div>
        <div onClick={handleClick} className={style}>
            <div className="question">How does one apply for the certification 🏆 exam?</div>
            <div className="answer">Just click <a href="https://campus.w3schools.com/collections/certifications">me</a> and follow all the instructions including the payments, study well and take the exams!Wish you success✨🥇</div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default About;
