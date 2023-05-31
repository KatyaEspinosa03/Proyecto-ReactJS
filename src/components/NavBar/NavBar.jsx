import React from 'react';
import CarWidget from '../CarWidget/CarWidget'

const NavBar = () => {

    return (
<nav className="navbar sticky-top"> 
    <div className="container justify-content-center">
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" href="#"> Inicio </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> Vinilos </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"> Sobre nosotros </a>
            </li>
        </ul>
            <div>
        <CarWidget />
            </div>
    </div>
</nav>
    )
}


export default NavBar