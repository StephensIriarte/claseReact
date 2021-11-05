import './items.css';
import ItemCount from  './ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext , cartContext,} from 'react';
import {  useCartContext } from '../context/cartContext';



const Items = ({itemProducto}) => {



    const {addToCart, carList} = useCartContext()

        const onAdd = (clicks) => {
             //addToCart( itemProducto, clicks)
        }
        
    return (
 
        <div class="p-4 md:w-1/2">
            <div class="h-full border-2 border-gray-400 border-opacity-1000 rounded-lg overflow-hidden">
                <Link to={`/detailProducto/${itemProducto.title}`}><img class="lg:h-56 md:h-42 w-full object-cover object-center" src={itemProducto.image} alt="blog"/></Link>   
                 <div class="p-6">    
                     <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Ofertas</h2>
                     <h2 class="tracking-widest text-xs title-font font-medium text-gray-800 mb-1">Precio {itemProducto.price} </h2>
                     <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{itemProducto.title}</h1>
                     <div class="flex items-center flex-wrap ">  
                                <ItemCount initial={1} stock={itemProducto.stock} onAdd={onAdd} />
                     </div> 
                </div>                 
            </div>                     
        </div>            
                    
      
     
    )
    }
export default Items
