// Import des dépendances

// * On crée une fonction Nav() qui récupère en props le titre et l'image de la bannière
// Puis les affiche dans le DOM

export default function Nav({ title, image }) {
    return (
        <nav className="banner">
            <img src={image} alt={title} className="banner__image" />
            <h1 className="banner__title">{title}</h1>
        </nav>
    )
}
