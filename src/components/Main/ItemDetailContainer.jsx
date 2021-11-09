import React, {useEffect, useState} from 'react'
import ItemDetailList  from './ItemDetailList'
import Spinner from './spinner'
import { useParams} from 'react-router'
import {getFirestore} from '../../Services/getFirebase'


const ItemDetailContainer  = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const { nombre } = useParams()

    useEffect(() => {
        const db = getFirestore()
        db.collection('Items').where('title', '==', nombre).get() 
            .then(resp => setItems( resp.docs.map(it => ({id: it.id, ...it.data() }) )) )
            .catch(err => console.log(err) )
            .finally(()=> setLoading(false))     
      }, [nombre]);


    return (
      
                <div>  
                     <ItemDetailList  itemProducto={items} />     
                    
                </div>        
           
                                   
    )
}

export default ItemDetailContainer 


