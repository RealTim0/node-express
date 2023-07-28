import React from 'react'
import ImageSlider from '../components/ImageSlider'

const Services = () => {
    const images=[
        'https://media.istockphoto.com/id/1437905931/photo/close-up-hand-of-auto-mechanic-using-measuring-manifold-gauge-check-the-refrigerant-and.jpg?s=612x612&w=0&k=20&c=f3Ixl9nAmJWnokX2tt_zmkFrqjYY7ol6jJJ7dnc6x3E=',
        'https://media.istockphoto.com/id/1325588832/photo/pouring-motor-oil-for-motor-vehicles-from-a-gray-bottle-into-the-engine.jpg?s=612x612&w=0&k=20&c=8El-cOoOpGSDz-dOjozJn5ijlFOuE1WGQA1hsZvyyMk=',
        'https://media.istockphoto.com/id/1164676449/photo/close-up-of-a-repairman-changing-wheel-and-tire-in-a-workshop.jpg?s=612x612&w=0&k=20&c=jw6sOcuf8WJMtAFmtT6yqKJcywW7WOZ7dgaq0mIG-2s=',
        'https://media.istockphoto.com/id/148125401/photo/worker-painting-a-car.jpg?s=612x612&w=0&k=20&c=1iOQqprSKnuUANE8XmCAliyk-sRrkhAvzoVh0c2oYmE=',
        'https://media.istockphoto.com/id/1287044692/photo/worker-washing-red-car-with-sponge-on-a-car-wash.jpg?s=612x612&w=0&k=20&c=_6WO9k1qkDub5CAEQgnORMduUoQJkU6w3jjVQTdTdwQ='
    ]
    const images2 = [
        'https://media.istockphoto.com/id/1204560471/vector/vector-signage-for-car-service.jpg?s=612x612&w=0&k=20&c=azEd2B2wm9PwqLWfvPQO39u7v0i4nqg3zGYGA7eaGRc=',
        'https://media.istockphoto.com/id/1464100663/photo/neon-oil-change-sign-at-a-service-department.jpg?s=612x612&w=0&k=20&c=pwTN0AfmVvXq1fKkgLGXD7EVAIGXjdUylKPqIM7qrdQ=',
        'https://media.istockphoto.com/id/1211154532/vector/tire-service-concept.jpg?s=612x612&w=0&k=20&c=GOkuPmtG1lv_9hkL4JB63vlV0w1vS44pLtyWeEOe7to=',
        'https://media.istockphoto.com/id/1221973951/vector/washing-car-station-wash-interior-and-engine.jpg?s=612x612&w=0&k=20&c=59291Jz0uIEmz-ucKlO5GEFAh38z5MLIrezGNhZXaP8=',
        'https://media.istockphoto.com/id/1437905931/photo/close-up-hand-of-auto-mechanic-using-measuring-manifold-gauge-check-the-refrigerant-and.jpg?s=612x612&w=0&k=20&c=f3Ixl9nAmJWnokX2tt_zmkFrqjYY7ol6jJJ7dnc6x3E=',
        'https://media.istockphoto.com/id/1325588832/photo/pouring-motor-oil-for-motor-vehicles-from-a-gray-bottle-into-the-engine.jpg?s=612x612&w=0&k=20&c=8El-cOoOpGSDz-dOjozJn5ijlFOuE1WGQA1hsZvyyMk=',
        'https://media.istockphoto.com/id/1164676449/photo/close-up-of-a-repairman-changing-wheel-and-tire-in-a-workshop.jpg?s=612x612&w=0&k=20&c=jw6sOcuf8WJMtAFmtT6yqKJcywW7WOZ7dgaq0mIG-2s=',
        'https://media.istockphoto.com/id/148125401/photo/worker-painting-a-car.jpg?s=612x612&w=0&k=20&c=1iOQqprSKnuUANE8XmCAliyk-sRrkhAvzoVh0c2oYmE=',
        'https://media.istockphoto.com/id/1287044692/photo/worker-washing-red-car-with-sponge-on-a-car-wash.jpg?s=612x612&w=0&k=20&c=_6WO9k1qkDub5CAEQgnORMduUoQJkU6w3jjVQTdTdwQ='
    ]
    const servicesData = [
        { id:1, service: 'Oil Change', price: '$50' },
        { id:2, service: 'Brake Service', price: '$100' },
        { id:3, service: 'Tire Rotation and Alignment', price: '$80' },
        { id:4, service: 'Battery Inspection and Replacement', price: '$70' },
        { id:5, service: 'Engine Tune-Up', price: '$120' },
        { id:6, service: 'Air Conditioning Service', price: '$60' },
        { id:7, service: 'Transmission Service', price: '$150' },
        { id:8, service: 'Suspension and Steering Service', price: '$90' },
        { id:9, service: 'Electrical System Check', price: '$50' },
        { id:0, service: 'Fluid Level Check and Top-Up', price: '$30' },
      ];
  return (
    <div className="home" style={{
      height:'100%'
    }}>
        <h2 style={{
            textAlign:'center',
            fontFamily:'sanserif',
            fontsize:'1.5rem',
            color:'brown'
        }}>We go beyond for customer satisfaction.</h2>

        <table
        style={{
            textAlign:'center'
        }}>
    <thead>
      <tr>
        <th>Car Service</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
    {servicesData.map((service) => (
          <tr >
            <td>{service.service}</td>
            <td>{service.price}</td>
          </tr>
        ))}
        </tbody>
  </table>
  <h3 style={{
    textAlign:'center'
  }}>Our Services:</h3>
  <hr ></hr>
      <ul className='services'>
        <li><strong>General Maintenance:</strong> Oil changes, tire rotations, filter replacements, and fluid checks to keep your vehicle in top condition.</li>
        <li><strong>Brake Services:</strong> Inspection, repair, and replacement of brakes for optimal safety on the road.</li>
        <li><strong>Engine Diagnostics and Repair:</strong> Comprehensive engine diagnostics and precise repairs to restore your vehicle's performance.</li>
        <li><strong>Electrical System Services:</strong> Expert troubleshooting and repair of electrical issues in your vehicle.</li>
        <li><strong>A/C and Heating Services:</strong> Keeping you comfortable on all your journeys with efficient A/C and heating system repairs.</li>
        <li><strong>Transmission Services:</strong> Skilled transmission experts to handle all transmission-related repairs and maintenance.</li>
        <li><strong>Suspension and Steering Services:</strong> Ensuring a smooth and stable ride through suspension and steering system checks and repairs.</li>
        <li><strong>Battery Replacement:</strong> Reliable battery replacement services to ensure smooth starts and consistent electrical supply.</li>
        <li>And more - We offer a wide range of car repair and maintenance services to meet all your automotive needs.</li>
      </ul>
        <div className='homeimgs'>
        <span className='optional'><ImageSlider images={images} /></span>
    <ImageSlider images={images2} />
    </div>
    </div>
  )
}

export default Services
