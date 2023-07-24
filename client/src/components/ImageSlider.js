import { useState, useEffect } from 'react';


const ImageSlider = ({ images, interval = 7000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to handle shifting to the next image
    const shiftToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set up the interval to automatically shift images
    const intervalId = setInterval(shiftToNextImage, interval);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={''}
          className={index === currentImageIndex ? 'visible' : 'hidden'}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
