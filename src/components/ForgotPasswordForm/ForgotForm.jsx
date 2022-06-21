import './ForgotForm.scss'
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import SiteButton from '../Button/SiteButton';
export default function ForgotForm({setSuccess}) {
    const {
        register,
        handleSubmit,
        reset,
       
      } = useForm({
        mode: "onSubmit"
      });
      const Autorizarion = () => {
          reset()
          setSuccess(true)
      }

    return(
    <form className='Forgot_wrapper' onSubmit={handleSubmit(Autorizarion)}>
        <div className ='Forgot_wrapper_inputs'>    
            <div>
                <p>Введите свой email::</p> 
                <TextField className="form_input" {...register("login")} name='email' size="small"  type="email" required placeholder='sanekya_san@mail.ru' />
            </div>
           
        </div>  
        <SiteButton type='submit'>Отправить письмо</SiteButton>
    </form>
    )
}