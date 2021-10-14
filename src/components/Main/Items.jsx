import React from 'react'
import ItemCount from './ItemCount';
import './items.css';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar  from '@material-ui/core/ImageListItemBar';
import { Link } from 'react-router-dom';


const Items = ({id,nombre, stock, precio, img}) => {

    

    return (
        <div>
            <div class="image"> <Link to={`/detailProducto/${id}`}><img src={img} alt="" width="100" height="100" /></Link> </div>
            <p>Producto: <span>{nombre}</span><br/></p>
            <p class="price">Precio: <strong>{precio} </strong></p>
            <span><ItemCount stock = {stock}/> </span><br />

        </div>     
     
    )
}

export default Items
