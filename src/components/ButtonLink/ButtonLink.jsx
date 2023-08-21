import { Link } from 'react-router-dom';

import './ButtonLink.scss';

const ButtonLink = props => {
    return (
        <Link to={props.link} rel="noopener noreferrer">
            <button className="button-link">{props.wording}</button>
        </Link>
    )
}

export default ButtonLink;
