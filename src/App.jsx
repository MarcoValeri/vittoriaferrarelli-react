import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import Opere from './pages/Opere/Opere';

import './assets/scss/main.scss';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/opere" element={<Opere />} />
      </Routes>
    </>
  )
}

export default App
