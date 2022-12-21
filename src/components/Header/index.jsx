import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_kasa_512w.png'

export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className="header__logo" />
            </Link>
            <menu className="menu">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="#">A propos</Link>
                </li>
            </menu>
        </header>
    )
}
