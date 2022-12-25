// Import des dépendances

import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_kasa_512w.png'

// * Création d'une fonction Header()
// On crée une constante qu'on appelle activeClassName qui contient un nom de classe CSS

// On retourne une balise header qui contient le logo, entouré d'une balise <Link> ainsi que le menu
// Le menu contient 2 balises <NavLink>, on crée une condition qui vérifie si le lien est actif,
// si on est sur un des deux liens du menu, alors on ajoute activeClassName à sa liste de classes CSS

export default function Header() {
    const activeClassName = 'header__link--active'
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className="header__logo" />
            </Link>
            <menu className="menu">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : 'header__link'
                        }
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? activeClassName : 'header__link'
                        }
                    >
                        A propos
                    </NavLink>
                </li>
            </menu>
        </header>
    )
}
