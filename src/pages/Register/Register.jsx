import { useForm } from 'react-hook-form'
import './Register.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

const Register = () => {
  const [ users, setUsers ] = useState([])
  const [ total, setTotalUsers ] = useState(0);
  const quantity = 4;
  const paginationBtns = []
  
  for(let number = 0; number < Math.ceil(total / quantity); number++) {
    paginationBtns.push(
      <Pagination.Item key={number} onClick={() => loadUsers(number)}>
        {number + 1}
      </Pagination.Item>
    ) 
  }

  const { register, handleSubmit, formState: { errors } } = useForm()

  async function formSubmited(newUser) {
    try {
      
      newUser.active = true;

      console.log(newUser);

      await axios.post(`http://localhost:9500/api/users`, newUser)

      
      loadUsers()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {

    loadUsers()
    
  }, [])

  // Si cuando llaman a la función no me mandan el parametro page como argumento, page va a tomar el valor de 1, si me lo envian page tendrá el valor con el que llamó la función
  async function loadUsers(page = 0) {
    // if(!page) page = 1; 

    const respuesta = await axios.get(`http://localhost:9500/api/users?page=${page}`);
    setTotalUsers(respuesta.data.total);
   
    console.log(respuesta.data.users)
    setUsers(respuesta.data.users)
  }

  return (
    <>
      <form onSubmit={handleSubmit(formSubmited)} className='register-form'>
        <div className="input-wrapper">

          <label>Nombre completo</label>

          <input
                  type="text" 
                  {...register("name", {  required: {
                                                value: true,
                                                message: 'El campo es requerido'
                                              }, 
                                              minLength: {
                                                value: 4,
                                                message: 'Caracteres requeridos minimo 4'
                                              }, 
                                              maxLength: {
                                                value: 12,
                                                message: 'Máximo de caracters permitido 12'
                                              } })} />

          {/* {errors.name?.type === "required" && <span className='input-error'>Este campo es requerido</span>} */}


          { errors.name?.message && <span className='input-error'>{ errors.name?.message  }</span> }

        </div>


        <div className="input-wrapper">

          <label>Email</label>

          <input type="email" {...register("email", { required: {
                                                        value: true,
                                                        message: "Campo requerido"
                                                      },
                                                      pattern: {
                                                        value: /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                                        message: "El email ingresado es incorrecto"
                                                      }
                                          })} />
          {  errors.email?.message && <span className='input-error'>{errors.email?.message}</span>}
        </div>


        <input type="password" {...register("password")} />
        {/* <input type="url" {...register("avatar")} /> */}

        <input type='number' {...register("age")} />
        <button type='submit'>Registrar</button>

      </form>
      {users.map(usr => (
        <div key={usr._id}>
            {usr.email}
          </div>
        
      ))}
      <Pagination>{paginationBtns}</Pagination>
    </>
  )
}

export default Register


//                 //3.1     4.5   7.8
// Math.ceil()     //  4     5     8
// Math.round()    //  3     5     8  
// Math.floor()    //  3     4     7