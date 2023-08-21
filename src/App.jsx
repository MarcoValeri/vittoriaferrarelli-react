import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import Opere from './pages/Opere/Opere';

import './assets/scss/main.scss';
import './App.css'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
    <ScrollToTop>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/opere" element={<Opere />} />
        </Routes>
    </ScrollToTop>
    </>
  )
}

export default App
