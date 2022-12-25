// Import des dépendances

import Card from '../Card/index'
import { Context } from '../../utils/Provider'
import React, { useContext } from 'react'

// * Création d'une fonction CardsList() qui récupère la liste de logements
// Puis map au sein de l'array afin d'afficher la liste des cards
// en passant les infos de chaque logement en props dans le composant <Card />

export default function CardsList() {
    let { data } = useContext(Context)

    return (
        <section className="cards-list">
            {data.map((card, i) => (
                <Card data={card} key={i} />
            ))}
        </section>
    )
}
