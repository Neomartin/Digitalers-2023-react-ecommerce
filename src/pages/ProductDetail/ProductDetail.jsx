import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function ProductDetail() {
    const [producto, setProducto] = useState(null)
    const { id } = useParams();

    useEffect(()=> {
        getProduct()
    }, [])

    async function getProduct() {
        try {
        
            const { data } = await axios.get(`http://localhost:9500/api/product/${id}`)
            const product = data.product;

            setProducto(product)
            
        } catch (error) {
            console.log(`No se pudo carga el producto`)
        }
    }

  return (
    <div>
        <h1>Detalle del Producto</h1>
        {
            producto ? (
                <>
                    <h2>{producto.name}</h2>
                    <p>
                        {producto.description}
                    </p>
                </>
            ) :
            (
                <div> No se encontró el producto</div>
            )
        }
    </div>
  )
}
