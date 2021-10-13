import React from 'react'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar  from '@material-ui/core/ImageListItemBar';

const ItemDetail = ({id,nombre, stock, precio, img})=> {

   
    console.log({id})



    return (
        
        <ImageListItem key={id}>
                
                    <img 
                        src={`${img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={nombre}
                        loading="lazy"
                    />
                 
                    <ImageListItemBar
                        title={nombre}
                        subtitle={<span>Precio: {precio}</span>}
                        position="below"
                       
                />
               
         </ImageListItem>
    )
}

export default ItemDetail
