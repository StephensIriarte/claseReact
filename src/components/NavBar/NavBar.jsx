import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const NavBar = () => {

  const {iconCart} = useCartContext()

return (

    <div class="topnav">
    <Link to={`/`}><a class="active" href="#promociones">Home</a></Link>
    <Link to={`/Menu/4`}><a href="snacks">Snacks o Mixs</a></Link> 
    <Link to={`/Menu/3`}><a href="#frutosSecos">Frutos Secos</a></Link>
    <Link to={`/Menu/2`}><a href="#frutasDesi">Frutas Deshidratada</a></Link>
    <Link to={`/Menu/1`}><a href="#semillas">Semillas</a></Link>
    <Link to={`/Menu/5`}><a href="#chocolates">Chocolates</a></Link>
    
    <Link to={`/Cart`}>{iconCart()}<a href="Cart"><CartWidget/></a></Link>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  </div>
)


}

export default NavBar
 
  
  


