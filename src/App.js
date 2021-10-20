
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartContextProvider  from './context/cartContext';
import { useState } from 'react';
import Cart from '../src/components/Main/Cart'

function App() {


  


  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route exact path="/detailProducto/:id">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/Menu/:tipo">
          <ItemListContainer/>
        </Route>
        <Route exact path="/Cart/:id">
          <Cart/>
        </Route>

        </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );

}

export default App;
