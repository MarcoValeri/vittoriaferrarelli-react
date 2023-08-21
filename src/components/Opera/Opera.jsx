import './Opera.scss';

const Opera = props => {
    return (
        <div className="opera">
            <div className="opera__wrapper">
                <div className="opera__container-title">
                    <h3 className="h3">{props.title}</h3>
                </div>
                <div className="opera__container-image">
                    <img className="opera__image" src={props.imageUrl} alt={props.imageAlt} />
                </div>
                <div className="opera__container-description">
                    <p className="p">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Opera;
