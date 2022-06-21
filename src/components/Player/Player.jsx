import ReactPlayer from 'react-player/lazy'
import SiteButton from '../Button/SiteButton'
import './Player.scss'
export default function Player({url = 'https://www.youtube.com/watch?v=Swkqd-cbVMA&ab_channel=__Vlad__'}) {
    return(
    <div className='Player'>
        
         <ReactPlayer url={url} 
            className='react-player'
         light={true}
         controls={true}
         playIcon={
         <div className='PlayCircle'>
            <img src={'img/Play.svg'} alt="fsdfsd" />
         </div>}
         />
           
    </div>
    )
}