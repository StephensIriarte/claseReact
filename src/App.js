
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { cartContext } from './context/cartContext';

function App() {

  return (
    <div>
      <cartContext.Provider>
        <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route exact path="/detailProducto/:id">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/Menu">
          <ItemListContainer/>
        </Route>

        </Switch>
        </BrowserRouter>
      </cartContext.Provider>
    </div>
  );

}

export default App;
