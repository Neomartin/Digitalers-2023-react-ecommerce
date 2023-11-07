import { useForm } from 'react-hook-form'

const Register = () => {
  const { register, handleSubmit } = useForm()

  function formSubmited(data) {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(formSubmited)}>
        <input {...register("fullname", { type:"text"})  }  />
        <input {...register("email", { type:"email"})  }  />
        <input {...register("password", { type:"password"})  }  />
        <input {...register("avatar", { type:"url"})  }  />

        <button type='submit'>Registrar</button>

      </form>
    
    
    </>
  )
}

export default Register