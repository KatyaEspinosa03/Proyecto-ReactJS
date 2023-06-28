
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';
import  { CartProvider } from './components/Cartcontext/CartContext'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import DetailPage from './pages/DetailPage/DetailPage';
import Category from './pages/Category/Category';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Error from './pages/Error/Error';




function App() {


  return (
    <CartProvider>
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
        <Route path="/notFound" element={<Error />} />
        <Route path= "/cart" element={<Cart />} />
        
      </Routes>
    </div>
    </Router>
    </CartProvider>
  )
}

export default App
