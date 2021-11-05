import React, {useEffect, useState} from 'react'
import ItemDetail  from './ItemDetail'
import Spinner from './spinner'
import { useParams} from 'react-router'
import {getFirestore} from '../../Services/getFirebase'


const ItemDetailContainer  = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    let { nombre } = useParams()

    useEffect(() => {
        const db = getFirestore()
        db.collection('Items').where('title', '==', nombre).get() 
            .then(resp => setItems( resp.docs.map(it => ({id: it.id, ...it.data() }) )) )
            .catch(err => console.log(err) )
            .finally(()=> setLoading(false))     
      }, []);

console.log("aqui 1111111")
console.log({items})
    return (
      
                <div>   
                    <ItemDetail  itemProducto={items} />       

                </div>        
           
                                   
    )
}

export default ItemDetailContainer 


