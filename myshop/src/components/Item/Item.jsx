//CARD PRODUCTO
const Item = ({producto}) => {
    console.log(producto)
    return (
        <>
            <div className="card cardProducto m-3" >
        <img src={`../img/${producto.img}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.precio}</p>
          <p className="card-text">{producto.modelo}</p>
          <button className="btn btn-dark">Ver Producto</button>
        </div>
      </div>
        </>
    );
}

export default Item;
