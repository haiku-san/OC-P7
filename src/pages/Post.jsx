import { useParams } from "react-router-dom";
import data from '../utils/logements.json'


export function findLocationById(data, locationId) {
    // let foundLocation = Object.values(data).find(location => location.id === locationId);
    let foundLocation;
    for(let location of data) {
        // console.log(location)
        if(location.id === locationId) {
            foundLocation = location;
        }
    }
    return foundLocation;
}

export default function Post() {
    const {id} = useParams()
    console.log(data)
    let currentLocation = findLocationById(data, id)
    console.log(currentLocation)

    return (
        <div>
            {id}
            {currentLocation.id}
        </div>
    )
}
