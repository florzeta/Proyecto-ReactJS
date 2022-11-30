import {useState, useEffect} from 'react';
import ItemList from "../ItemList/ItemList.jsx";
import {consultarBDD} from '../../assets/funciones.js';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD().then(products => {
            const productsList= products.filter(prod => prod.stock > 0) //para que el cliente vea solo items con stock
            const cardProductos = ItemList({productsList})
            setProductos(cardProductos)
        })
    },[]);

    //[] cuando sucedan cambios en todo el array
    //[propiedad] cuando se modifica un objeto interno del array
    
    return (
        
            <div className='row cardProductos'>
                {productos}
            </div>
    );
}

export default ItemListContainer;

//consulta base de datos y envia al itemList