import Video from '../../media/Video.mp4'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SiteButton from './../Button/SiteButton';
import Player from './../Player/Player';
import './MainPageWrapper.scss'
export default function MainPageWrapper() {
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
        navigate('/')}
    return(
        <div className='MainPageWrapper'>
            <SiteButton onClick = {handleSubmit}>Выйти</SiteButton>
            <Player url={Video}/>
        </div>
    )
}