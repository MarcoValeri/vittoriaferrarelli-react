import { useEffect, useState } from 'react';

// Firebase
import { db } from '../../firebase';
import { onValue, ref } from 'firebase/database';

import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Opera from '../../components/Opera/Opera';

import './Opere.scss';

const Opere = () => {

    // State
    const [quadri, setQuadri] = useState([]);

    // useEffect
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
        <div>
            <Nav />
            <div className="opere">
                <div className="opere__container-title">
                    <h2 className="h2">Le opere di <span className="logo-font">Vittoria Ferrarelli</span></h2>
                </div>
                <div className="opere__container-opere">
                    {
                        quadri.map((item, index) => {
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
                        })
                    }
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Opere;
