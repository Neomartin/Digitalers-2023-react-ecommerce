import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import AdminProduct from './pages/AdminProduct/AdminProduct'
import Register from './pages/Register/Register'
import PrivateRoute from './guard/PrivateRoute'


function App() {

  return (
    <>
      <Header />
      <main className='flex-grow-1'>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/contact' element={ <Contact /> } />
            <Route path='/admin-product' element={         
              <PrivateRoute>
                <AdminProduct />
              </PrivateRoute>
          } />
          
          <Route path="/register" element={ <Register /> } />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
