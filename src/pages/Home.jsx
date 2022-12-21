import Nav from '../components/Nav/index'
import CardsList from '../components/CardsList/index'
import background_mountains from '../assets/images/Background_mountains.png'

function Home() {
    return (
        <div className="homePage">
            <Nav
                title="Chez vous, partout et ailleurs"
                image={background_mountains}
            />
            <CardsList />
        </div>
    )
}

export default Home
