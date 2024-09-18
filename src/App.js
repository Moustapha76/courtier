import "./App.css";
import logo1 from './logow.svg';
import logo2 from './logo.svg';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from './pages/Home';
import Proprieties from './pages/Properties';
import Property from './pages/Property';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import { useEffect, useState, useRef, useContext } from "react";
// import { UserOutlined } from '@ant-design/icons';
import Resultat from "./pages/Resultat";
import Article from "./pages/ArticleItem";
import { Switch } from 'antd';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { GlobalContext } from "./componants/partials/GlobalContext";

export default function App() {
  const myApp = useRef(null);
  const { lightMode, setLightMode } = useContext(GlobalContext);
  const changeTheme = (checked) => {
    setLightMode(checked);
    myApp.current.classList.toggle('darkmode');
  };
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    // Nettoyage pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  return (
    <div className='App' ref={myApp}>
      <Router>
        <div className={`navbar${scrollY>0 ? ' fixed' : ''}`}>
          <navbar>
            <a href="/"><img src={scrollY>0 && !lightMode ? logo2 : logo1} alt="logo" className="logo"/></a>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Accueil</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/qui-sommes-nous">Qui sommes-nous ?</NavLink>
                </li> */}
                <li>
                  <NavLink to="/proprietes">Propriétés</NavLink>
                </li>
                <li>
                  <NavLink to="/actualites">Actualités</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/resultat">Search</NavLink>
                </li>
              </ul>
            </nav>
            {/* <div className="btn-connexion">
              <UserOutlined />
              <a href="/login">Se connecter</a><i>|</i>
              <a href="/signin">S'inscrire</a>
            </div> */}
            <div className="themeMode">
            <Switch onChange={changeTheme} />
            <WbSunnyIcon/>
            </div>
          </navbar>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/qui-sommes-nous" element={<About />} /> */}
          <Route path="/proprietes" element={<Proprieties />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/actualites/:id" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resultat" element={<Resultat />} />
          <Route path="/proprietes/details/:id" element={<Property />} />
          <Route path="/proprietes/details/" element={<Property />} />
        </Routes>
      </Router>
    </div>
  );
}
