import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { useParams} from 'react-router'
import { products } from '../data/data';


const Cart = () => {
    
    const { id } = useParams();
    const itemTipo = products.filter( itemPro => itemPro.id === id)  
    
    
    const [result , setResul] = useState(null)

    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(() => {   
        resolve(products);
    }, 3000 );
    });

    getProducts.then((result) => {
        
        setResul(result)
    },err => {
        //console.log(result)
    }).catch((error) => {
        //console.log(result)
    }).finally(() => {
        //console.log(result)
    })

    //console.log(result)

    return (
        <div>
             <h1> Tienes {id }  productos</h1> 
        </div>
    )
}

export default Cart
