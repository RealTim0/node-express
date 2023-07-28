import ImageSlider from "../components/ImageSlider"
import {Link } from 'react-router-dom'
export default function Home(){
    const images = [
        "https://cdn.freelogodesign.org/files/f587fa9aa6ec45eda32fa4ab57476b3e/thumb/logo_200x200.png?v=638257996700000000",
       "https://media.istockphoto.com/id/1271779268/photo/calling-roadside-assistance.jpg?s=612x612&w=0&k=20&c=JxOZbwpnSE_vxFWZ5Te1-Y4QrUMsiLFaDyXu_uMX1ok=",
       "https://media.istockphoto.com/id/1200379568/photo/roadside-assistance.jpg?s=612x612&w=0&k=20&c=EuSQl4jlCGVsVouNTkxgRk3sPRkcrb8qYJgwYBOOAwo=",
       "https://media.istockphoto.com/id/516980552/photo/car-problems-red-warning-triangle.jpg?s=612x612&w=0&k=20&c=zmn9gQBW6Z_BNQqx9_Owcguy3GT1XhfkNidHA0ArmzE=",
       "https://media.istockphoto.com/id/697242234/photo/stressed-man-had-a-car-accident.jpg?s=612x612&w=0&k=20&c=CKuK4UjPSG2QvTNaly2sfLpAl8P9R8oVyK1F4EMEk1c=",
       "https://media.istockphoto.com/id/1314052316/photo/female-checking-car-water-pressure-after-stalling-in-road.jpg?s=612x612&w=0&k=20&c=wqz6nd4sdmuEeYEcuFF5ZcKO3d5zmodFYdg1496qhCQ=",
       "https://media.istockphoto.com/id/505821310/photo/friends-examining-broken-down-car-on-sunny-day.jpg?s=612x612&w=0&k=20&c=b74TDCSnlKS1yps41TAftqNqpC626rhnpT-iENXhn9Y="
    ]
    return(
        <div className="home">
            <div className="homelogo">
            <img style={{
                borderRadius:'50%',
                textAlign:'center',
                width:'200px'

            }}
            
             src="https://cdn.freelogodesign.org/files/f587fa9aa6ec45eda32fa4ab57476b3e/thumb/logo_200x200.png?v=638258011500000000" alt=""/>
             </div>
            <h3 style={{
                textAlign:'center',
                color:"black",
                fontFamily:"sans-serif",
                fontSize:'2rem'
            }}>
                Stranded on how to get your broken car to the garage for maintance or repair ?
            </h3>
            <h3
            style={{
                textAlign:'center',
                color:"black",
                fontFamily:"sans-serif",
                fontSize:'2rem'}}>
                Then...
            </h3>
            <div className="buttoncontainer"><Link to="/booking">BOOK AN APPOINMENT</Link></div>
            <div className='float'>
                <h4 style={{
                    color:'red',
                    marginBottom:'5px'
                }}>EMERGENCY?</h4>
                <a href="tel:+254704386428">📞</a>
            </div>
        <div className="homeimgs">
            <ImageSlider images={images}/>
            <span className="optional"><ImageSlider images={images}/></span>
       </div>
       </div>
    )
}