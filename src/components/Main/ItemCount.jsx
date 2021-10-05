import React , {useState} from 'react'
import Button  from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Stack from '@material-ui/core/Stack'
import ImageList  from '@material-ui/core/ImageList'
import items from './ItemListContainer'
import ImageListItem  from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar' 


const ItemCount = ({stock}) => {
    
    const [clicks , setCricks] = useState(0)

    const addClick = () => {
       if (clicks < stock) setCricks(clicks + 1) ; 
    }

    const removeClick = () => {
       if (clicks >= 1 ) setCricks(clicks - 1) ; 
    }
    
    const items = [
        {id:1 , nomProducto :"Almendra", stock:10, img :"https://piwen.cl/442-large_default/almendras.jpg" }
      ]



    return (

        
        <div>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems="below"> 
                    <ImageList sx={{ width: 400, height: 300 }}>
                            {items.map((item) => (
                                <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.nomProducto}
                                    loading="lazy"
                                />
                                <ImageListItemBar title={item.nomProducto} position="center" />
                                <table class="default">
                                  <tr>
                                    <td><Button variant="text" onClick={()=>addClick()}>+</Button></td>
                                    <td><h1>{clicks}</h1></td>
                                    <td><Button variant="text"  onClick={()=>removeClick()}>-</Button></td>
                                </tr>
                                </table>
                                </ImageListItem>
                            ))}

             
                    </ImageList>
                
                
                    </Grid>        
                </Box>
            </Box>





            
        </div>
    )
}

export default ItemCount
