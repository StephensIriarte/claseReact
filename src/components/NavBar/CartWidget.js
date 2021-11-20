
import './NavBar.css';
import cantProducto from '../Main/Items';

const CartWidget = () => {

    
    return (
        
        <div>    
            <td><h1>{cantProducto}</h1></td>
            <i class="gg-shopping-cart"></i>
        </div>
    )
}

export default CartWidget
