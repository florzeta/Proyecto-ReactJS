import{ Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
const Cart = () => {
    return(
        <div>
            <Checkout/>
            <button className="btn btn-light"><Link to={'/checkout'}></Link></button>
        </div>
    );
}

export default Cart;