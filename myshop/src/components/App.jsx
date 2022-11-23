import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';

const App = () => {
  const busqueda = "Busca"
  return (
    <>
     <Navbar/>
     <ItemListContainer greeting={"Bienvenidos!"}/>
     <ItemCount/>
    </>
      
  );
}

export default App;
