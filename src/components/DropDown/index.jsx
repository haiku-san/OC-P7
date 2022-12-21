import React, { useState } from 'react'
import arrowIcon from '../../assets/images/arrow_back_ios-24px.svg'

export default function DropDown({ title, content }) {
    let [isOpen, setIsOpen] = useState(true)

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

            {!isOpen && (
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
