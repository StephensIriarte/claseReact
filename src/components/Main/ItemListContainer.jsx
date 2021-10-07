import React from 'react'
import Items from './Items'

const ItemListContainer = ({greeting}) => {


    return (
        <div>
            {greeting}
           <Items/>
        </div>
    )
}

export default ItemListContainer

