import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer';




function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Bienvenidos a Catalogo"/> 
    </div>
  );
}

export default App;
