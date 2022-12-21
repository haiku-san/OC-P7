import { Context } from '../../utils/Provider'
// import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Card({ data }) {
    // let { string } = useContext(Context)

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

            {/* {string} */}
        </div>
    )
}
