import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div>
      <img src={images[currentImageIndex]} />
      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};
