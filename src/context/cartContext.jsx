import { createContext, useState } from "react";


export const cartContext = createContext([])

function CartContextProvider({children}) {

   const [cartList, setCarlist] = useState([])

   const agregarItem=(item)=> {
     setCarlist([...cartList, item])
   } 


    return(
        <cartContext.Provider value = {{
            cartList,
            agregarItem


        }}>

            {children}
        </cartContext.Provider>
    )

}

export default CartContextProvider