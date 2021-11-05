import { memo } from 'react'
import Items from './Items'


// memo(fn, fn) 

const ItemList = memo(
    ({itemProducto}) => {
        
          
            return (
                <section class="text-gray-1500 body-font">
                    <div class="container px-20 py-36 mx-auto">
                        <div class="flex flex-wrap -m-4"> 
                            <div class="flex flex-wrap -m-4">
                                     {itemProducto.map(itemProducto => <Items itemProducto={itemProducto} />  )}
                            </div>
                        </div>  
                    </div>   
                </section>   
            )
        }
, (oldProps, newProps)=> oldProps.itemProducto.length === newProps.itemProducto.length)


    
    
    export default ItemList
