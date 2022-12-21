import background_mountains from '../../assets/images/Background_mountains_img.png'

export default function Nav() {
    return (
        <nav className="banner">
            <img
                src={background_mountains}
                alt="Paysage montagneux"
                className="banner__image"
            />
            <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
        </nav>
    )
}
