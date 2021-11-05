import {useState, createContext, useContext } from "react";



export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext) 

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])
    

    const agregarItem = (item) => {
        
        setCartList([...cartList, item])

    }
     const addToCart = (item, quantity) => {

        console.log("aquiiii -linea23")
        console.log(item)

        const index = cartList.findIndex(i => i.item.id === item.id)
        console.log(index)
    
          if (index > -1) {
            const oldQy = cartList[index].quantity
    
            cartList.splice(index, 1)
            setCartList([...cartList, { item, quantity: quantity + oldQy}])
          }
          else {
            setCartList([...cartList, {item, quantity}])
          }
      }

    const iconCart = () => {
        return cartList.reduce( (acum, valor) => acum + valor.quantity, 0) 

       
       } 
    
    return(
        <CartContext.Provider value= {{
                cartList,
                iconCart,
                agregarItem

        }}>
            {children}
        </CartContext.Provider>


    )


} 


    



export default CartContextProvider