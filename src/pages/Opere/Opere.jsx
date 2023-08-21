import Nav from '../../components/Nav/Nav';
import Opera from '../../components/Opera/Opera';

import './Opere.scss';

const Opere = () => {
    return (
        <div>
            <Nav />
            <div className="opere">
                <div className="opere__container-title">
                    <h2 className="h2">Le opere di Vittoria Ferrarelli</h2>
                </div>
                <div className="opere__container-opere">
                    <Opera
                        title="Opera 1"
                        imageUrl="https://viaggin.com/images/app-per-viaggiare.webp"
                        alt="Image alt title"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />
                    <Opera
                        title="Opera 1"
                        imageUrl="https://viaggin.com/images/app-per-viaggiare.webp"
                        alt="Image alt title"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />
                    <Opera
                        title="Opera 1"
                        imageUrl="https://viaggin.com/images/app-per-viaggiare.webp"
                        alt="Image alt title"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />
                    <Opera
                        title="Opera 1"
                        imageUrl="https://viaggin.com/images/app-per-viaggiare.webp"
                        alt="Image alt title"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />
                    <Opera
                        title="Opera 1"
                        imageUrl="https://viaggin.com/images/app-per-viaggiare.webp"
                        alt="Image alt title"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />
                    <Opera
                        title="Opera 1"
                        imageUrl="https://viaggin.com/images/app-per-viaggiare.webp"
                        alt="Image alt title"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />

                </div>
            </div>
        </div>
    )
}

export default Opere;
