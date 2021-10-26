import React from 'react'
import { useState, useContext} from 'react';
import { CartContext } from '../context/cartContext';
import { products } from '../data/data.js'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount';


const Cart = () => {

     console.log("aquiii prueba")  

    const {cartList} = useContext(CartContext)
    console.log("aquiiiii")
    console.log({cartList})

    return (
        <div>
               <Card sx={{ maxWidth: 345 }}>
                     {cartList.map(item => <div class="image" key={item.id}> <img src={item.img} alt="" width="300" height="300" /> 
                     <Typography align='center' gutterBottom variant="h5" component="div">{item.nombre}</Typography>
                     <p class="price" align='center'>Precio: <strong>{item.precio} </strong></p>
                     <div align='center'><span ><ItemCount  stock = {item.stock} /> </span><br /> </div> 
                     </div>)}
                     
               </Card>
        </div>
    )
}

export default Cart

