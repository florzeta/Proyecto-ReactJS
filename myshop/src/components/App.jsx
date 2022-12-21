import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//components
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
