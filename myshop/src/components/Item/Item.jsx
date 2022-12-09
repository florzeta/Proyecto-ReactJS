import { Link } from 'react-router-dom';
//CARD PRODUCTO
const Item = ({prod}) => {

  return (

    <div className='card cardProducto mb-3'>
      <img src={`../img/${prod.img}`} className="card-img-top" alt="..." />
      <div className='card-body cardBody'>
        <h5 className="card-title">{prod.nombre}{prod.modelo}</h5>
        <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
        <button className='btn btn-dark btn-primary'><Link className="nav-link" to={`/producto/${prod.id}`}>Ver Producto</Link></button>
      </div>
    </div>
  );
}

export default Item;
