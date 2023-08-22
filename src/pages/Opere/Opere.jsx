import { Route, Routes } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Opera from '../../components/Opera/Opera';

import getAllOpera from '../../apis/quadri.json';

import './Opere.scss';

const Opere = () => {

    return (
        <div>
            <Nav />
            <div className="opere">
                <div className="opere__container-title">
                    <h2 className="h2">Le opere di <span className="logo-font">Vittoria Ferrarelli</span></h2>
                </div>
                <div className="opere__container-opere">
                    {
                        getAllOpera.map(item => {
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
                        })
                    }
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Opere;
