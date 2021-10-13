
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path="/detailProducto/:id">
        <ItemDetailContainer/>
      </Route>
      <Route exact path="/">
        <ItemListContainer/>
      </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );

}

export default App;
