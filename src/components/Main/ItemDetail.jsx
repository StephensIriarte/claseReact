import React from 'react'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar  from '@material-ui/core/ImageListItemBar';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const ItemDetail = ({id,nombre, stock, precio, img})=> {

   
    console.log({id})



    return (
        
        
                
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                    <div class="image"> <Link to={`/Menu/4`}><img src={img} alt="" width="300" height="300" /></Link> </div>
                            <Typography align='center' gutterBottom variant="h5" component="div">{nombre}</Typography>
                                <p class="price" align='center'>Precio: <strong>{precio} </strong></p>
                                <div align='center'><span ><ItemCount  stock = {stock} /> </span><br /> </div> 
                                <div align='center'><Button variant="contained" color="success" > Añadir al Carrito </Button></div>  
                    </Card>    
                </div>
              
        
    )
}

export default ItemDetail
