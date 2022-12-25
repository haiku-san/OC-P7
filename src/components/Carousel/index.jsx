// Import des dépendances

import React, { useState } from 'react'
import arrowIcon from '../../assets/images/arrow_back_ios-24px.svg'

// * Création d'une fonction Carousel() qui récupère en props l'array contenant le lien des images à afficher
// On utilise le hook useState pour définir un état "currentImageIndex"
// qui prend en valeur un nombre entre 1 et le nombre total d'images à afficher

// On ajoute des eventListeners sur les boutons suivant et précédent qui appellent des fonctions lorsque le bouton est actionné

// Ces fonctions incrémente la variable "currentImageIndex" en ajoutant ou en retirant 1 de l'index

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
            <p className="carousel__index">
                {currentImageIndex + 1}/{images.length}
            </p>
        </div>
    )
}
