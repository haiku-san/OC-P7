import {Link} from "react-router-dom"
import logo from "../../assets/images/logo_kasa.png";
import "../../assets/sass/style.css"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo Kasa" className="logo"/>
            <menu>
                <li>
                    <Link to="#">Accueil</Link>
                </li>
                <li>
                    <Link to="#">A propos</Link>
                </li>

            </menu>
        </header>
    )
}