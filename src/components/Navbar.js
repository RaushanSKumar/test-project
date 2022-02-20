import React from "react";
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
    return(
        <nav className="navbar navbar-dark ">
  <a  className="navbar-brand" href="#"> 
  <span  className="navbar-toggler-icon toggle-button"></span>
  
  </a> 
  <span className="shop-cart-icon"><FaShoppingCart/></span>
</nav>
    )
}

export default Navbar;
