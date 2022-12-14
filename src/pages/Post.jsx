import { useParams } from "react-router-dom";
import DropDown from "../components/DropDown";
import data from '../utils/logements.json'



function findLocationById(data, locationId) {
    let foundLocation = Object.values(data).find(location => location.id === locationId);
    return foundLocation;
}

export default function Post() {
    const {id} = useParams()
    console.log(data)
    let currentLocation = findLocationById(data, id)
    console.log(currentLocation)

    return (
        <div>
            <DropDown content={currentLocation.equipments} />
        </div>
    )
}
