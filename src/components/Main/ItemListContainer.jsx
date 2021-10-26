import React, {useEffect, useState} from 'react'
import Items from './Items'
import Spinner from './spinner'
import { useParams} from 'react-router'
import ImageList from '@material-ui/core/ImageList';
import { products } from '../data/data.js'
import Divider from '@material-ui/core/Divider';


const ItemListContainer  = () => {

    const { tipo } = useParams();
    
    if (!tipo) {
        var itemTipo = products.filter( itemPro => itemPro.tipo > 0) 
      
    }
    else{
        var itemTipo = products.filter( itemPro => itemPro.tipo == tipo)     
     
    }


const [result , setResul] = useState(null)
const [loading, setLoading] = useState(false)


const getProducts = new Promise ((resolve, reject) => {
    
    setTimeout(() => {   
        setLoading(false);
    resolve(itemTipo);
    
}, 3000 );
});

getProducts.then((result) => {
    
    setResul(result)
    setLoading(true);
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

               
                <br></br>
                <br></br>
                <div  class="items">
                {!loading && <Spinner/>}   
                    <Divider textAlign="left"> Ofertas</Divider>
                    <br></br>
                    <ImageList sx={{ width: 850, height: 800 }} cols={4} rowHeight={250}>
                          {result && result.map((itemTipo) => (
                             <Items 
                                id ={itemTipo.id}
                                nombre={itemTipo.nomProducto}
                                stock={itemTipo.stock}
                                precio = {itemTipo.precio}
                                img ={itemTipo.img}/> 
                           
                           ))}
                    <br></br>          
                    </ImageList>         
                </div>
                           
            </div>
                                   
    )
}

export default ItemListContainer 


