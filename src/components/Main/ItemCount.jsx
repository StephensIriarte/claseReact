import React , {useState} from 'react'
import Button  from '@material-ui/core/Button'



const ItemCount = ({stock}) => {
    
    const [clicks , setCricks] = useState(0)

    const addClick = () => {
       if (clicks < stock) setCricks(clicks + 1) ; 
    }

    const removeClick = () => {
       if (clicks >= 1 ) setCricks(clicks - 1) ; 
    }
    
    console.log ({stock})

    return (

        
        <div>
           
                                <table class="default">
                                  <tr>
                                    <td><Button variant="text" onClick={()=>addClick()}>+</Button></td>
                                    <td><h1>{clicks}</h1></td>
                                    <td><Button variant="text"  onClick={()=>removeClick()}>-</Button></td>
                                </tr>
                                </table>

        </div>
    )
}

export default ItemCount
