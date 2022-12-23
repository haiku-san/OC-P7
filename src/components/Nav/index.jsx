export default function Nav({ title, image }) {
    return (
        <nav className="banner">
            <img src={image} alt={title} className="banner__image" />
            <h1 className="banner__title">{title}</h1>
        </nav>
    )
}
