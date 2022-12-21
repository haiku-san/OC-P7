import Card from '../Card/index'
import { Context } from '../../utils/Provider'
import React, { useContext } from 'react'

export default function CardsList() {
    let { data } = useContext(Context)

    console.log(data)
    return (
        <section className="cards-list">
            {data.map((card, i) => (
                <Card data={card} key={i} />
            ))}
        </section>
    )
}
