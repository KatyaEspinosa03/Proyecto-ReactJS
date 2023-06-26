
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import DetailPage from './pages/DetailPage/DetailPage';
import Category from './pages/Category/Category';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



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
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/artist/:search" element={<ItemListContainer />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
