import Nav from '../../components/Nav/Nav';

import getAllOpera from '../../apis/quadri.json';

import './Quadro.scss';

const Quadro = () => {

    // Func
    const getUrlLastPath = setCurrentUrl => {
        const arrUrl = setCurrentUrl.split("/");
        const filteredArrUrl = arrUrl.filter(singlePath => {
            return singlePath !== "";
        })
        const urlLastPath = filteredArrUrl[filteredArrUrl.length -1];
        return urlLastPath;
    }

    // Variables
    const currentUrl = window.location.href;
    const currentPath = getUrlLastPath(currentUrl);

    return (
        <div>
            <Nav />
            {
                getAllOpera.map(item => {
                    if (item.url === currentPath) {
                        console.log(`CODE: 200 - ${item.url}`);
                        return (
                            <div key={item.id}>
                                <h2>{item.title}</h2>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Quadro;
