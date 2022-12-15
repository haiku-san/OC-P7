import { useParams } from "react-router-dom";
import DropDown from "../components/DropDown";
import data from '../utils/logements.json'
import Carousel from '../components/Carousel/index'; // assuming the Carousel component has been created



const images = [
    'https://picsum.photos/id/100/1920/1080',
    'https://picsum.photos/id/101/1920/1080',
    'https://picsum.photos/id/102/1920/1080',
  ];



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
            <DropDown title='Description' content={currentLocation.description} />
            <DropDown title='Equipements' content={currentLocation.equipments} />
            <Carousel images={images} />
        </div>
    )
}
