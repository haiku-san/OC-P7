// Import des dépendances

import React from 'react'
import { Link } from 'react-router-dom'

// * Création d'une fonction Card() qui prend en props les informations du logement
// puis affiche une card cliquable qui affiche dynamiquement les informations de chaque logement
// On utilise la balise <Link /> pour pouvoir naviguer au sein de notre application sans recharger la page

export default function Card({ data }) {
    return (
        <div className="card">
            <Link to={'post/' + data.id} className="card__link">
                <img
                    src={data.cover}
                    alt={data.title}
                    className="card__image"
                />
            </Link>
            <h2 className="card__title">{data.title}</h2>
        </div>
    )
}
