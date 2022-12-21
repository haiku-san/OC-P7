import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/images/logo_kasa_512w.png'

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
