import { useParams } from 'react-router-dom'
import DropDown from '../components/DropDown'
import data from '../utils/logements.json'
import Carousel from '../components/Carousel/index'
import Rating from '../components/Rating/index'

function findLocationById(data, locationId) {
    let foundLocation = Object.values(data).find(
        (location) => location.id === locationId
    )
    return foundLocation
}

export default function Post() {
    const { id } = useParams()
    console.log(data)
    let currentLocation = findLocationById(data, id)
    console.log(currentLocation)

    return (
        <div>
            <Carousel images={currentLocation.pictures} />
            <h1>{currentLocation.title}</h1>
            <h2>{currentLocation.location}</h2>
            <ul>
                {currentLocation.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                ))}
            </ul>
            <h2>{currentLocation.host.name}</h2>
            <img
                src={currentLocation.host.picture}
                alt={'Photo de profil de ' + currentLocation.host.name}
            />
            <Rating rating={currentLocation.rating} />
            <DropDown
                title="Description"
                content={currentLocation.description}
            />
            <DropDown
                title="Equipements"
                content={currentLocation.equipments}
            />
        </div>
    )
}
