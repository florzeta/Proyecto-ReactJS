import Item from "../Item/Item";

//modifica array de datos


const ItemList = ({productsList}) => {
    return (
        <>
            {productsList.map(producto => <Item key={producto.id} producto= {producto}/>)}
        </>
    );
}

export default ItemList;
