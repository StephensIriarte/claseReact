import {useState} from 'react'
import {  useCartContext } from '../context/cartContext';
import CartForm from './CartForm'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {getFirestore} from '../../Services/getFirebase'


const Cart = () => {  
            
        const {cartList, precioTotal, borrarLista, iconCart, deleteFromCart} = useCartContext()
        
        return (
        <>


                        <section class="text-gray-600 body-font">
                            <div class="container px-5 py-24 mx-auto">
                                    <div class="flex flex-col text-center w-full mb-20">
                                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Carrito de Compras</h1> 
                                    </div>
                                    <div class="lg:w-2/3 w-full mx-auto overflow-auto"> 
                                    <table id = 'tableid' class="table-auto w-full text-left whitespace-no-wrap">
                                        
                                        <thead>
                                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"></th>
                                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Producto</th>
                                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Cantidad</th>
                                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Precio</th>
                                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">SubTotal</th>
                                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quitar del Carrito</th>
                                        </thead>   
                                        <tbody>
                                                    {cartList.map(item => 
                                                    
                                                            <tr id="myRow">
                                                                <td class="image"> <img src={item.item.image} alt="" width="100" height="100" /> </td>
                                                                <td class="px-4 py-3 title-font tracking-wider font-medium text-White-900 text-sm bg-White-100">{item.item.title} </td>
                                                                <td class="px-4 py-3 title-font tracking-wider font-medium text-White-900 text-sm bg-White-100">{item.quantity} </td>
                                                                <td class="px-4 py-3 title-font tracking-wider font-medium text-White-900 text-sm bg-White-100">{item.item.price} </td> 
                                                                <td class="px-4 py-3 title-font tracking-wider font-medium text-White-900 text-sm bg-White-100">{item.item.price * item.quantity} </td> 
                                                                <td><button variant="text"  onClick={()=>deleteFromCart({item})}>Eliminar</button></td>
                                                                        
                                                            </tr>
                                                    
                                                    )} 
                                        </tbody>              
                                    </table>
                                            <div class="lg:w-1/3 w-full lg:pr-20 lg:py-10 mb-6 lg:mb-0">          
                                                        <div class="flex border-t border-gray-500 py-2">
                                                                    <span class="text-sm">Total:</span>
                                                                    <span class="ml-auto text-gray-900">{precioTotal()}</span>
                                                        </div>             
                                                        <div class="flex border-t border-gray-200 py-2">
                                                        <CartForm/> 
                                                        </div>
                                                    </div>  
                                            </div> 
                                        
                                </div>  
                                                            
                        </section>
                                        
 
                           
        </>
    )
}

export default Cart


