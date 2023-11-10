/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';
import './ProductItem.css';
export default function ProductItem({ producto }) {
    
    return (
        <div className="card" key={producto._id}>
            <h4 className="card-title">{ producto.name }</h4>
            <p className="card-description">{ producto.description }</p>
            <div className="card-price">{producto.price}</div>

            <img src={`http://localhost:9500/uploads/${producto.image}`} />

            <NavLink className="card-btn" to={`product-detail/${producto._id}`}>

                Ver más
            </NavLink>
            <button className="card-btn">
                Comprar
            </button>
        </div>
    )
}
