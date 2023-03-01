// Import des dépendances

import Nav from '../components/Nav/index'
import CardsList from '../components/CardsList/index'
import background_mountains from '../assets/images/Background_mountains.png'

// * Création d'une fonction Home() qui retourne la navbar, en utilisant des props pour préciser le titre et l'image de fond
// Puis qui retourne la liste des appartements via le composant <CardsList />
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
