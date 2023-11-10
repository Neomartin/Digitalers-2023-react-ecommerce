import axios from 'axios'
import { useEffect, useState } from 'react';
import HomeInfo from '../../components/HomeInfo/HomeInfo';
import ProductList from '../../components/ProductList/ProductList';


const Home = () => {
  const [ products, setProducts ] = useState([])
  

  useEffect(function() {
    // -Código a ejecutar de manera controlada

    async function getProducts() {
      try {
        const response = await axios.get(`http://localhost:9500/api/product`);

        console.log(response.data.products)
        setProducts(response.data.products)


      } catch (error) {
        console.log(error)      
      }
    }
    getProducts()

  }, [])

  
  console.log(`Se volvió a renderizar el componente`)
  

  return (
    <>
      <h1>Home</h1>
      <HomeInfo />
      <ProductList productsItems={products} />
    
    
    </>
  )
}

export default Home