import {useState, createContext, useContext } from "react";



export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext) 

export default function  CartContextProvider({children}){
    const [cartList, setCartList] = useState([])
    

    const agregarItem = (item) => {
        
        setCartList([...cartList, item])

    }
    
    const addToCart = (item, quantity) => {

        const index = cartList.findIndex(i => i.item.id === item.id)
        console.log("aquiiii index")
        console.log(index)
    
          if (index > -1) {
            const oldQy = cartList[index].quantity
    
            cartList.splice(index, 1)
            setCartList([...cartList, { item, quantity: quantity + oldQy}])
            console.log({item, quantity})
          }
          else {
            setCartList([...cartList, {item, quantity}])
            console.log({item, quantity})
          }
      }

    const iconCart = () => {
        return cartList.reduce( (acum, valor) => acum + valor.quantity, 0) 

       } 

    const precioTotal =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 
    }


    const deleteFromCart = (item) => {
        //Verificamos si esta en el carrito  
        
        const deleteProduct = cartList.filter((prod) => prod.item.id !== item.item.id);
        
        console.log(item)
        console.log("linea39 cartcontext")
        setCartList([...deleteProduct]);
    };  

    function borrarLista(){
        setCartList([])
    }

    return(
        <CartContext.Provider value= {{
                cartList,
                iconCart,
                agregarItem,
                precioTotal,
                deleteFromCart,
                borrarLista,
                addToCart

        }}>
            {children}
        </CartContext.Provider>


    )


} 

    


