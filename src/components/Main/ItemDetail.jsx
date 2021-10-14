import React from 'react'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar  from '@material-ui/core/ImageListItemBar';
import { Link } from 'react-router-dom';

const ItemDetail = ({id,nombre, stock, precio, img})=> {

   
    console.log({id})



    return (
        
        
                
                <div>
                    <div class="image"> <Link to={`/Menu/`}><img src={img} alt="" width="400" height="350" /></Link> </div>
                    <p>Producto: {nombre}</p>
                    <p class="price">Precio: <strong>{precio} </strong></p>        
                </div>
              
        
    )
}

export default ItemDetail
