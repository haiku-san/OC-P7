import React, {useState} from 'react'
import arrowIcon from "../../assets/images/arrow_back_ios-24px.svg"

export default function DropDown({content}) {
    let [isOpen, setIsOpen] = useState(true)
    

    function handleDropDown() {
        setIsOpen(!isOpen)
    }


  

    return (
        <article>
            <div onClick={handleDropDown}>
                <span>Equipements</span>
                { isOpen ? <img src={arrowIcon} alt="Arrow icon" /> : <img src={arrowIcon} alt="Arrow icon" className="closed" /> }
            </div>
            {isOpen && <ul>
                {content.map((element, i) => <li key={i}>{element}</li>)}
            </ul>}
        </article>
    )
}