import SiteButton from "../../components/Button/SiteButton";
import Player from "../../components/Player/Player";
import Video from '../../media/Video.mp4'
import './MainPage.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function Main() {
    const navigate = useNavigate()
    const isAuth = ()=> { 
        const auth = localStorage.getItem('isAuth')
         if(!auth) {
             navigate('/')
         }
     }
     useEffect(()=> {
        isAuth()
     },[])
     const handleSubmit = () => {
        localStorage.removeItem('isAuth')
        navigate('/')
     }
    return(
        <div className="MainPage">
            <SiteButton onClick = {handleSubmit}>Выйти</SiteButton>
            <Player url={Video}/>
        </div>
    )
}