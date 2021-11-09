import React , {useState} from 'react'
import Button  from '@material-ui/core/Button'
import { Link } from 'react-router-dom'


const ItemCount = ({stock, initial, onAdd}) => {
    
    const [clicks , setclicks] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    const [button, setbutton]= useState("Añadir al carrito")

    const addClick = () => {
       if (clicks < stock) setclicks(clicks + 1) ; 
    }

    const removeClick = () => {
       if (clicks >= 1 ) setclicks(clicks - 1) ; 
    }
    
   
    const agregarCarrito=()=>{
        onAdd(clicks)
        if( button === "Añadir al carrito") 
        
        if( clicks === 0){
          setCambiarBoton(true)
        }else{
          setCambiarBoton(false)
        }
            


    }
    return (

        
        <div>
           
                                <table class="default">
                                  <tr>
                                    <td><Button variant="text" onClick={()=>addClick()}>+</Button></td>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{clicks}</h1>
                                   
                                    <td><Button variant="text"  onClick={()=>removeClick()}>-</Button></td>
                                </tr>
                                </table>
                                {cambiarBoton ?
                                    <div align='center'><button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" onClick={agregarCarrito}>{button}</button></div>
                                                    
                                : 
                                <div>
                                    <Link to="/Cart" >
                                    <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Terminar Compra</button>      
                                    </Link>
                                </div>
                                
                                }


        </div>
    )
}

export default ItemCount
