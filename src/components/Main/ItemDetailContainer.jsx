import React, { useState} from 'react'
import { useParams} from 'react-router'
import ItemsDetail from './ItemDetail'
import { products } from '../data/data.js'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {


   const { id } = useParams();

  
   const itemDetalle = products.find( itemPro => itemPro.id = { id } )
   //const itemDetalle = products.find( itemPro => itemPro.id = '2' )

  console.log(itemDetalle)
  console.log("aquiiiiiiii")

    return (
        <div>
                   
                             <ItemDetail 
                                id ={itemDetalle.id}
                                nombre={itemDetalle.nomProducto}
                                stock={itemDetalle.stock}
                                precio = {itemDetalle.precio}
                                img ={itemDetalle.img}/> 
                           
          
        </div>
    )
}

export default ItemDetailContainer
