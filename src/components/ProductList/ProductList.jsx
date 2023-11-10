/* eslint-disable react/prop-types */
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";
import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function ProductList({ productsItems }) {
  const [ filteredProducts, setFilteredProducts] = useState([])


  useEffect(() => {
    setFilteredProducts(productsItems)
  }, [ productsItems ])


  function handleFilterProducts(evt) {
    const value = evt.target.value;

    const filtered = productsItems.filter(prod => {

      if(prod.name.toLowerCase().includes(value.toLowerCase())) {
        return true
      }

    })

    setFilteredProducts(filtered)

  }

  return (
    <section>
        <h2>ProductList</h2>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Producto a buscar</Form.Label>
            <Form.Control type="text" placeholder="product name" onKeyUp={handleFilterProducts} />
          </Form.Group>

        <div className="product-list">
            {
                filteredProducts.map(prod => (
                    <ProductItem producto={prod} key={prod._id} />
                ))
            }
        </div>
        
    </section>
  )
}
