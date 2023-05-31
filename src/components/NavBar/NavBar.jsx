import React from 'react'

const NavBar = () => {

    return (
        <nav className="navbar sticky-top justify-content-center"> 
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
        </nav>
    )
}


export default NavBar