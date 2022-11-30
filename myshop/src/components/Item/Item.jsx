//CARD PRODUCTO
const Item = ({ prod }) => {

  return (

    <div className='card cardProducto mb-3'>
      <img src={`../img/${prod.img}`} className="card-img-top" alt="..." />
      <div className="card-body cardBody">
        <h5 className="card-title">{prod.nombre}</h5>
        <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
        <p className="card-text">{prod.modelo}</p>
        <button className="btn btn-dark btn-primary">Ver Producto</button>
      </div>
    </div>
  );
}

export default Item;
