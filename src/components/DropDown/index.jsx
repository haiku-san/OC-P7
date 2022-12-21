import React, { useState } from 'react'
import arrowIcon from '../../assets/images/arrow_back_ios-24px.svg'

export default function DropDown({ title, content }) {
    let [isOpen, setIsOpen] = useState(true)

    function handleDropDown() {
        setIsOpen(!isOpen)
    }

    return (
        <article>
            <div className="topbar" onClick={handleDropDown}>
                <span>{title}</span>
                {isOpen ? (
                    <img src={arrowIcon} alt="Arrow icon" />
                ) : (
                    <img src={arrowIcon} alt="Arrow icon" className="closed" />
                )}
            </div>
            {/* {isOpen && <ul>
                {content.map((element, i) => <li key={i}>{element}</li>)}
            </ul>} */}

            {!isOpen && (
                <div className="content">
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
