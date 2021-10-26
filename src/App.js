
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartContextProvider  from './components/context/cartContext';
import Cart from './components/Main/Cart'

function App() {


  


  return (
    <div>
      <CartContextProvider >
        <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route exact path="/detailProducto/:id">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/Menu/:tipo">
          <ItemListContainer/>
        </Route>
        <Route exact path="/Cart/">
          <Cart/>
        </Route>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );

}

export default App;
