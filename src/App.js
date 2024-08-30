import "./App.css";
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Proprieties from './pages/Properties';
import Contact from './pages/Contact';
import { useEffect } from "react";
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

export default function App() {
  useEffect(()=>{},[])
  return (
    <div className="App">
      <Router>
        <navbar>
          <a href="/"><img src={logo} alt="logo" className="logo"/></a>
          <form className="search"><input type="text" placeholder="Entrer un mot clès" /><button><SearchOutlined /></button></form>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/qui-sommes-nous">Qui sommes-nous ?</NavLink>
              </li>
              <li>
                <NavLink to="/proprieties">Propriétés</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="btn-connexion">
          <UserOutlined />
          <a href="/login">Se connecter</a><i>|</i>
          <a href="/signin">S'inscrire</a>
          </div>
        </navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qui-sommes-nous" element={<About />} />
          <Route path="/proprieties" element={<Proprieties />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
