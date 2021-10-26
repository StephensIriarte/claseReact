import './items.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { products } from '../data/data';
import { useState, useContext } from 'react';
import { CartContext } from '../context/cartContext';



const Items = ({id,nombre, stock, precio, img}) => {

 
    const {cartList, agregarItem} = useContext(CartContext)
    

    const [button, setbutton]= useState("Añadir al carrito")
   const onAdd = () => {
     
        agregarItem({id: id, nombre:nombre, img:img, precio:precio, stock:stock})
    
 
     if( button === "Añadir al carrito")
        setbutton("Añadido")
   }
        
    return (
        <div>
                     <Card sx={{ maxWidth: 345 }}>
                      
                        <div class="image"> <Link to={`/detailProducto/${id}`}><img src={img} alt="" width="100" height="100" /></Link> </div>
                            <Typography align='center' gutterBottom variant="h5" component="div">{nombre}</Typography>
                                <p class="price" align='center'>Precio: <strong>{precio} </strong></p>
                               
                                <div align='center'><Button variant="contained" color="success"  onClick={onAdd} ><span>{button}</span> </Button></div>
                                
                    </Card>

        </div>     
     
    )
}

export default Items
