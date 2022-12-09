import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <>
            <button className="btn btn-secundary cartWidget">
                <Link to={'/Cart'} className="nav-link">
                    <i className="fa fa-shopping-basket fa-lg logoCarrito" aria-hidden="true"></i>
                    <span className="cantCarrito">0</span>
                </Link>
            </button>
        </>
    );
}

export default CartWidget;
