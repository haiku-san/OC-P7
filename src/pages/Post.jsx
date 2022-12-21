import { useParams } from 'react-router-dom'
import DropDown from '../components/DropDown'
import data from '../utils/logements.json'
import Carousel from '../components/Carousel/index'

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

    const images = currentLocation.pictures

    return (
        <div>
            <Carousel images={images} />
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
