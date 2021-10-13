import React, {useEffect, useState} from 'react'
import Items from './Items'
import ImageList from '@material-ui/core/ImageList';
import { products } from '../data/data.js'



const ItemListContainer  = () => {

const [result , setResul] = useState(null)

const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() => {
    resolve(products);
    }, 3000);
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
         <ImageList sx={{ width: 850, height: 800 }} cols={4} rowHeight={200}>
                          {result && result.map((products) => (
                             <Items 
                                id ={products.id}
                                nombre={products.nomProducto}
                                stock={products.stock}
                                precio = {products.precio}
                                img ={products.img}/> 
                           
                           ))}
        </ImageList>         
        </div>                         
    )
}

export default ItemListContainer 


