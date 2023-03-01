// Import des dépendances

import React from 'react'
import greyStarIcon from '../../assets/images/star_rate-24px.png'
import redStarIcon from '../../assets/images/star_rate-24px_red.png'

// * On crée une fonction Rating() qui récupère en props la note attribuée à un logement dans le JSON
// On map au sein de notre valeur pour créer un <li> contenant une étoile rouge le nombre de fois correspondant à la valeur de rating
// On map au sein de 5 moins notre nombre pour afficher le nombre restant d'étoiles grises
// Au total, on obtient toujours 5 étoiles

function Rating({ rating }) {
    return (
        <div>
            <ul className="rating-stars">
                {[...Array(Number(rating))].map((star, i) => (
                    <li key={i}>
                        <img
                            src={redStarIcon}
                            alt="star icon"
                            className="rating-stars__icon"
                        />
                    </li>
                ))}
                {[...Array(5 - Number(rating))].map((star, i) => (
                    <li key={i}>
                        <img
                            src={greyStarIcon}
                            alt="star icon"
                            className="rating-stars__icon"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Rating
