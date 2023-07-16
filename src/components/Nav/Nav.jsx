import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className="nav__wrapper">
                <div className="nav__container-logo">
                    <h2><Link className="nav__logo link-no-style h1" to="/">Vittoria Ferrarelli</Link></h2>
                </div>
                <div className="nav__container-menu">
                    <ul className="list-menu">
                        <li className="nav__menu-item"><Link className="body-md link-no-style" to="/">Home</Link></li>
                        <li className="nav__menu-item"><Link className="body-md link-no-style" to="/chi-sono">Chi Sono</Link></li>
                        <li className="nav__menu-item"><Link className="body-md link-no-style" to="/opere">Opere</Link></li>
                        <li className="nav__menu-item"><Link className="body-md link-no-style" to="/contatti">Contatti</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;