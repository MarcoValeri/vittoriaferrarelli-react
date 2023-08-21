import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className="nav__toggle">
                <label htmlFor="menu" aria-label="Main Navigation Menu"></label>
                <input id="menu" className="nav__input" name="menu" type="checkbox" aria-label="Main Navigation Menu" />
                <span className="nav__span nav__span--empty"></span>
                <span className="nav__span"></span>
                <span className="nav__span"></span>
                <ul className="nav__menu list-menu">
                    <li className="nav__container-logo"><h2><Link className="nav__logo link-no-style h1 logo-font" to="/">Vittoria Ferrarelli</Link></h2></li>
                    <li className="nav__menu-item"><Link className="body-md link-no-style" to="/">Home</Link></li>
                    <li className="nav__menu-item"><Link className="body-md link-no-style" to="/chi-sono">Chi Sono</Link></li>
                    <li className="nav__menu-item"><Link className="body-md link-no-style" to="/opere">Opere</Link></li>
                    <li className="nav__menu-item"><Link className="body-md link-no-style" to="/contatti">Contatti</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
