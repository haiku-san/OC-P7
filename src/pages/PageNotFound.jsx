// Import des dépendances

import React from 'react'
import { Link } from 'react-router-dom'

// * Création d'une fonction Error() qui retourne un message : erreur 404
// ainsi qu'un bouton pour revenir sur la page d'acceuil

function Error() {
    return (
        <div className="pageNotFound">
            <div className="pageNotFound__error-text">
                {' '}
                <h1>404</h1>
                <h2>Oups ! La page que vous demandez n'existe pas.</h2>
            </div>

            <div className="pageNotFound__link-block">
                <Link to="/" className="pageNotFound__link">
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </div>
    )
}

export default Error
