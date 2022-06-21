import './form.scss'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
export default function AutorizationForm() {
    const navigate = useNavigate()
    const isAuth = ()=> { 
       const auth = localStorage.getItem('isAuth')
        if(auth) {
            // navigate('sfsdf')
        }
    }
    const {
        register,
        handleSubmit,
        reset,
       
      } = useForm({
        mode: "onSubmit"
      });
      const Autorizarion = () => {
          reset()
        //   navigate('/dfsdf')
          localStorage.setItem('isAuth',true)
      }

      useEffect(()=> {
        isAuth()
      },[])
    return(
    <form className='Autorization_wrapper' onSubmit={handleSubmit(Autorizarion)}>
        <div className ='Autorization_wrapper_inputs'>    
            <div>
                <p>Введите свой email, телефон или id:</p> 
                <TextField className="form_input" {...register("login")} name='login' size="small"  type="text" required placeholder='#3923943294' />
            </div>
            <div>
                <p>Введите свой пароль:</p>
                <TextField className="form_input" {...register("password")}name='password' size="small"  type="password" required placeholder='********' />
                <Link to={'/'} className="forgot">Забыли пароль?</Link>
            </div>
        </div>  
        <button type="submit">Войти</button>
    </form>
    )
}