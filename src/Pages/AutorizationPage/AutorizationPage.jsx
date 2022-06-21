
import AutorizationForm from "../../components/AutorizationForm/Form";
import './AutorizationPage.scss'
export default function AutorizationPage() {
     
    return(
        <div className="Autorization">
                <div className="Wrapper">
                     <h2>Авторизация</h2>    
                     <AutorizationForm/>
                </div>  
        </div>
    )
}