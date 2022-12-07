import {Context} from '../../utils/Provider'
import React, {useContext} from "react"
import {Link} from "react-router-dom"

export default function Card({data}) {
    let {string} = useContext(Context)

    return (
        <div>
            <Link to={"post/" + data.id}>
                <img src={data.cover} alt={data.title} />
            </Link>
            <h2>{data.title}</h2>
            
            {string}
        </div>
    )
}