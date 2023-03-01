// Import des dépendances

import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import DropDown from '../components/DropDown'
import data from '../utils/logements.json'
import Carousel from '../components/Carousel/index'
import Rating from '../components/Rating/index'

// * Création d'une fonction qui retrouve les infos de l'appartement dans le JSON à partir de son ID

function findLocationById(data, locationId) {
    let foundLocation = Object.values(data).find(
        (location) => location.id === locationId
    )

    return foundLocation
}

// * Création d'une fonction Post() qui récupère l'id de la page via l'URL
// Qui appelle la fonction findLocationById() pour récupérer les informations de l'appartement
// Puis affiche lesdites informations sur la page à l'aide de 3 composants dynamiques
// qui récupérent les informations du logement et les passent en props :
// * <Carousel />
// * <Rating />
// * <DropDown />

export default function Post() {
    const { id } = useParams()
    let currentLocation = findLocationById(data, id)

    if (currentLocation === undefined) {
        return <Navigate to="/page-not-found" />
    }

    return (
        <div className="postPage">
            <Carousel images={currentLocation.pictures} />
            <div className="location-informations">
                <div className="location-informations__main">
                    <h1>{currentLocation.title}</h1>
                    <h2>{currentLocation.location}</h2>
                    <ul className="location-informations__tags">
                        {currentLocation.tags.map((tag, i) => (
                            <li key={i}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="location-informations__secondary">
                    <div className="location-informations__host">
                        <h2>{currentLocation.host.name}</h2>
                        <div className="location-informations__cropped-image">
                            {' '}
                            <img
                                src={currentLocation.host.picture}
                                alt={
                                    'Photo de profil de ' +
                                    currentLocation.host.name
                                }
                            />
                        </div>
                    </div>

                    <Rating rating={currentLocation.rating} />
                </div>
            </div>
            <div className="dropdowns-list">
                <DropDown
                    title="Description"
                    content={currentLocation.description}
                />
                <DropDown
                    title="Equipements"
                    content={currentLocation.equipments}
                />
            </div>
        </div>
    )
}
