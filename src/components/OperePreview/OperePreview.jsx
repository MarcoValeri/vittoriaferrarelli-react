import getAllOpera from '../../apis/quadri.json';

import ButtonLink from '../ButtonLink/ButtonLink';
import Opera from '../Opera/Opera';


import './OperePreview.scss';

const OperePreview = () => {

    return (
        <div className="opere-preview">
            <div className="opere-preview__container-title">
                <h2 className="h2 logo-font">Le opere dell'artista</h2>
            </div>
            <div className="opere-preview__container-preview">
                {
                    getAllOpera.map((item, index) => {
                        if (index < 3) {
                            return (
                                <Opera
                                    key={item.id}
                                    url={item.url}
                                    title={item.title}
                                    imageUrl={item.imageUrl}
                                    imageAlt={item.imageAlt}
                                    description={item.description}
                                />
                            )
                        }
                    })
                }
            </div>
            <div className="opere-preview__container-button">
                <ButtonLink link="/opere" wording="Scopri tutte le opere" />
            </div>
        </div>
    )
}

export default OperePreview;
