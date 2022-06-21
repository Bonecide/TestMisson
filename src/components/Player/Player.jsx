import ReactPlayer from 'react-player/lazy'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Player.scss'
export default function Player({url = 'https://www.youtube.com/watch?v=Swkqd-cbVMA&ab_channel=__Vlad__'}) {
    return(
    <div className='Player'>
        
         <ReactPlayer url={url} 
            className='react-player'
         playing={true}
         light={true}
         controls={true}
         playIcon={
         <div className='PlayCircle'>
            <PlayArrowIcon className='PlayArrow'/>
         </div>}
         />
           
    </div>
    )
}