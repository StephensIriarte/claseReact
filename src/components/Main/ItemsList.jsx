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
import ItemCount from './ItemCount'



const ItemsList = ({key, nombre, stock, precio, img}) => {

console.log({stock})

    return (
        <div>
            <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems="below"> 
                    <ImageList sx={{ width: 500, height: 400 }}>
                           
                                <ImageListItem key={key}>
                                <img
                                    src={`${img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={nombre}
                                    loading="lazy"
                                />
                                 <table class="default">
                                  <tr>   
                                  <td>{nombre}</td>
                                  </tr>
                                  <tr>
                                  <td><ItemCount stock = {stock}/> </td>
                                  </tr>
                                  </table>
                                  </ImageListItem>
                            
                    </ImageList>
                
                
                    </Grid>        
                </Box>
            </Box>

        </div>
    )
}

export default ItemsList
