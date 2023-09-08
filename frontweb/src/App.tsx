import './assets/styles/custom.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';

import Header from './components/Header';
import Home from './pages/Home'
import Catalogo from './pages/Catalogo';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
