import React, {useState} from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {

    return (
        <div>
            {greeting}
            <ItemCount stock = {7}/>
        </div>
    )
}

export default ItemListContainer

