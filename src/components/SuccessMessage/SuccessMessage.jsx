import SiteButton from "../Button/SiteButton";
import './SuccessMessage.scss'
import { useNavigate } from 'react-router-dom';
export default function SuccessMessage() {
    const navigate = useNavigate()
    return (
        <div className="SuccessMessage">
            <p>Проверьте свою почту на наличие сообщения о востановлении пароля и пройдите все шаги что написаны в письме</p>
            <SiteButton onClick = {() => navigate('/')} >Готово</SiteButton>
        </div>
    )
}