
import { useState } from 'react';
import ForgotForm from './../ForgotPasswordForm/ForgotForm';
import SuccessMessage from './../SuccessMessage/SuccessMessage';
export default function ForgotPasswordWrap() {

    const [success,setSuccess]= useState(false)
    return(
        <div className="Wrapper">
                    {
                    !success ? 
                    <>
                        <h2>Забыли пароль?</h2>
                        <ForgotForm setSuccess={setSuccess}/>
                    </> 
                     :
                    <>
                        <h2>Успешно!</h2>
                        <SuccessMessage/>
                    </> 
                    }

                    
        </div>  
    )
}