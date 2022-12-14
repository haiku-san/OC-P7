import Card from "../Card/index"
// import data from '../../utils/logements.json'
import {Context} from "../../utils/Provider"
import React, {useContext} from "react"

export default function CardsList() {
    let {data} = useContext(Context)

    console.log(data)
    return (
        <section>
            {/* <Card /> */}
            {data.map((card, i) => <Card data={card} key={i}/>)}
        </section>
    )
}