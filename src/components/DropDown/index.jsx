// Import des dépendances

import React, { useState } from 'react'
import arrowIcon from '../../assets/images/arrow_back_ios-24px.svg'

// * Création d'une fonction DropDown() qui prend en props le titre et le contenu du dropdown
// On utilise le hook State pour créer un boolean isOpen qui est "true" par défaut

// On retourne le dropdown dans le DOM en rendant la partie supérieure cliquable
// On ajoute un eventListener qui appelle la fonction handleDropDown() qui change l'état du boolean

// On conditionne l'affichage du contenu du dropdown au fait que "isOpen" soit true

// On crée une condition supplémentaire qui vérifie si la props content est un array ou non.
// Si c'est un array, on l'affiche sous forme de liste, sinon on l'affiche tel quel en paragraphe

export default function DropDown({ title, content }) {
    let [isOpen, setIsOpen] = useState(false)

    function handleDropDown() {
        setIsOpen(!isOpen)
    }

    return (
        <article className="dropdown">
            <div className="dropdown__topbar" onClick={handleDropDown}>
                <div className="dropdown__topbar-background"></div>
                <div className="dropdown__informations">
                    <span className="dropdown__title">{title}</span>
                    {isOpen ? (
                        <img
                            src={arrowIcon}
                            alt="Arrow icon"
                            className="dropdown__icon"
                        />
                    ) : (
                        <img
                            src={arrowIcon}
                            alt="Arrow icon"
                            className="dropdown__icon dropdown__icon--closed"
                        />
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="dropdown__content">
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </article>
    )
}
