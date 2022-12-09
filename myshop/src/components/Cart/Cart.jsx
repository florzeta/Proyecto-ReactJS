import{ Link } from "react-router-dom";
const Cart = () => {
    return(
        <div>
            <h1>Productos</h1>
            <button className="btn btn-light"><Link to={'/checkout'}>Finalizar compra</Link></button>
        </div>
    );
}

export default Cart;