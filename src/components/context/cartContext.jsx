import {useState, createContext} from "react";



export const CartContext = createContext([]);

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])
    

    const agregarItem = (item) => {
        
        setCartList([...cartList, item])

    }

    
    return(
        <CartContext.Provider value= {{
                cartList,
                agregarItem

        }}>
            {children}
        </CartContext.Provider>


    )


} 

  
  
    



export default CartContextProvider