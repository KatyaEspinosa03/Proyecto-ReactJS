import React from "react";
import img from "/src/assets/images/logo.png";
const Header = () => {
    return (
        <div className="text-center"> 
            <img src={img} className="img-fluid" alt="logo-vynilworld"/>
        </div>
    )
}

export default Header