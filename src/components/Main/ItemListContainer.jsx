import React, {useEffect, useState} from 'react'
import ItemList  from './ItemList'
import Spinner from './spinner'
import { useParams} from 'react-router'
import {getFirestore} from '../../Services/getFirebase'


const ItemListContainer  = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const [item, setItem] = useState({})

    const { idCategoria } = useParams()



    useEffect(() => {
        
        
        if (idCategoria) {
            const db = getFirestore()
            db.collection('Items').where('CategoriaID', '==', idCategoria).get() 
            .then(resp => setItems( resp.docs.map(it => ({id: it.id, ...it.data() }) )) )            
        } else {
            const db = getFirestore()
            db.collection('Items').get() //toda la colección
            .then(resp => setItems( resp.docs.map(it => ({id: it.id, ...it.data() }) )) )
            .catch(err => console.log(err) )
            .finally(()=> setLoading(false))            
        }

    }, [idCategoria])




    return (
      
                <div>
                            {loading ? <Spinner/> : 
                                <ItemList  itemProducto={items} />            
                             }        

                </div>        
           
                                   
    )
}

export default ItemListContainer 


