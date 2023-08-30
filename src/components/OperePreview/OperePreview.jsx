import { useEffect, useState } from 'react';

import ButtonLink from '../ButtonLink/ButtonLink';
import Opera from '../Opera/Opera';

// Firebase
import { db } from '../../firebase';
import { onValue, ref } from '@firebase/database';

import './OperePreview.scss';

const OperePreview = () => {

    // State
    const [quadri, setQuadri] = useState([]);

    // Effect
    useEffect(() => {
        const query = ref(db, "Quadri");
        return onValue(query, (snapshot) => {
            const data = snapshot.val();

            if (snapshot.exists()) {
                Object.values(data).map((quadro) => {
                    setQuadri((quadri) => [...quadri, quadro]);
                });
            }
        });
    }, []);

    return (
        <div className="opere-preview">
            <div className="opere-preview__container-title">
                <h2 className="h2 logo-font">Le opere dell'artista</h2>
            </div>
            <div className="opere-preview__container-preview">
                {
                    quadri.map((item, index) => {
                        if (index < 3) {
                            return (
                                <Opera
                                    key={index}
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
