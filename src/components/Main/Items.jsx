import React, {useState} from 'react'
import ItemsList from './ItemsList'

const Items = () => {

    const products = [
        {id:1 , nomProducto :"Almendra", precio : 2500  ,stock:10, img :"https://piwen.cl/442-large_default/almendras.jpg" },
        {id:2 , nomProducto :"Mani", precio : 1600 , stock:8, img :"https://piwen.cl/371-large_default/mani-tostado-sin-sal.jpg" }
    ]

const [result , setResul] = useState(null)

const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() => {
    resolve(products);
    }, 5000);
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
           { result && result.map(( item =>
           (<ItemsList
             key ={item.id}
             nombre={item.nomProducto}
             stock={item.stock}
             precio = {item.precio}
             img ={item.img}
             />)
           ))
           }
        </div>
    )
}

export default Items

