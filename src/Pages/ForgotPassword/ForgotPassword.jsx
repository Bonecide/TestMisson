import { useState } from "react"
import './ForgotPassword.scss'
import ForgotForm from './../../components/ForgotPasswordForm/ForgotForm';
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";
export default function ForgotPassword() {
    const [success,setSuccess]= useState(false)
    return(
         <div className="Forgot">
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
        </div>
    )
}