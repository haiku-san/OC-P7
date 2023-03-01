// Import des dépendances

import React from 'react'
import logo from '../../assets/images/logo_kasa_white_512w.png'

// * Création d'une fonction Footer() qui affiche simplement le logo ainsi que les copyrights du site

export default function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo Kasa" className="footer__logo" />
            <h3 className="footer__copyrights">
                © 2020 Kasa. All rights reserved
            </h3>
        </footer>
    )
}
