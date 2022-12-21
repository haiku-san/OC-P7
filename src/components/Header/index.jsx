import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_kasa_512w.png'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo Kasa" className="logo" />
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
