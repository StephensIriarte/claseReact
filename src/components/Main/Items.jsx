import React from 'react'
import ItemCount from './ItemCount'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar  from '@material-ui/core/ImageListItemBar';
import { Link } from 'react-router-dom';


const Items = ({id,nombre, stock, precio, img}) => {

    

    return (

                <ImageListItem key={id}>
                
                    <img 
                        src={`${img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={nombre}
                        loading="lazy"
                    />
                    <Link to={`/detailProducto/${id}`}>
                    <ImageListItemBar
                        title={nombre}
                        subtitle={<span>Precio: {precio}</span>}
                        position="below"
                       
                /></Link>
                <ItemCount stock = {stock}/>   
                </ImageListItem>
     
    )
}

export default Items
