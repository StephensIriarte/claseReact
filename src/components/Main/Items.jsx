import React, { useState } from 'react'
import ItemCount from './ItemCount';
import './items.css';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar  from '@material-ui/core/ImageListItemBar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { products } from '../data/data';



const Items = ({id,nombre, stock, precio, img}) => {

    const [clicks , setCricks] = useState(0)

    const addClick = () => {
        setCricks(clicks + 1) ; 

        console.log(clicks)
    }


    return (
        <div>
                     <Card sx={{ maxWidth: 345 }}>
                      
                        <div class="image"> <Link to={`/detailProducto/${id}`}><img src={img} alt="" width="100" height="100" /></Link> </div>
                            <Typography align='center' gutterBottom variant="h5" component="div">{nombre}</Typography>
                                <p class="price" align='center'>Precio: <strong>{precio} </strong></p>
                                <div align='center'><span ><ItemCount  stock = {stock} /> </span><br /> </div>
                                <div align='center'><Button variant="contained" color="success"  onClick={()=>addClick()} > Añadir al Carrito </Button></div>
                                
                    </Card>

        </div>     
     
    )
}

export default Items
