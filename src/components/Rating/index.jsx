import React from 'react'
import greyStarIcon from '../../assets/images/star_rate-24px.png'
import redStarIcon from '../../assets/images/star_rate-24px_red.png'
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
