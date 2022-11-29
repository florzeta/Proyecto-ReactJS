
const CartWidget = () => {
    return (
            <>
          <ul className="navbar-nav me-auto cartWidget">
                <li className="nav-item">
                    <button className="btn btn-secundary">
                        <i class="fa fa-shopping-basket fa-lg logoCarrito" aria-hidden="true"></i>
                        <span className="cantCarrito">0</span>
                        </button>
                </li>
          </ul>  
          </>
    );
}

export default CartWidget;
