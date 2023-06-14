
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import DetailPage from './pages/DetailPage/DetailPage';



function App() {


  return (
    <Router>
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
