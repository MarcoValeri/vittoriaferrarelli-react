import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className="nav__wrapper">
                <div className="nav__container-logo">
                    <h2><Link className="link-no-style" to="/">Vittoria Ferrarelli</Link></h2>
                </div>
                <div className="nav__container-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;