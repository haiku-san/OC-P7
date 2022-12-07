import Card from "../Card/index"
import data from '../../utils/logements.json'

export default function CardsList() {
    console.log(data)
    return (
        <section>
            {/* <Card /> */}
            {data.map((card) => <Card data={card}/>)}
        </section>
    )
}