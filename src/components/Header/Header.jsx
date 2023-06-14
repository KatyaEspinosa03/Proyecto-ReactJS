import React from "react";
import img from "/src/assets/images/logo.png";
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <div className="text-center"> 
        <Link to={"/"} className="link-details">
            <img src={img} className="img-fluid" alt="logo-vynilworld"/>
            </Link>
        </div>
    )
}

export default Header