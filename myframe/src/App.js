import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import './components/Navbar/Navbar.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Hola!'}/>
      
    </div>
  );
}

export default App;
