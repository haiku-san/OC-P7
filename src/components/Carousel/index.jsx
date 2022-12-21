import React, { useState } from 'react'
import arrowIcon from '../../assets/images/arrow_back_ios-24px.svg'

export default function Carousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const previousImage = () => {
        setCurrentImageIndex(
            (currentImageIndex + images.length - 1) % images.length
        )
    }

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length)
    }

    return (
        <div className="carousel">
            <img
                src={images[currentImageIndex]}
                alt="test"
                className="carousel__image"
            />
            <img
                src={arrowIcon}
                alt="Icône de flèche"
                className="carousel__button carousel__button--previous"
                onClick={previousImage}
            />
            <img
                src={arrowIcon}
                alt="Icône de flèche"
                className="carousel__button carousel__button--next"
                onClick={nextImage}
            />
        </div>
    )
}
