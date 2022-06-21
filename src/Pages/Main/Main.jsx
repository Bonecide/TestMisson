
export default function Main() {
    return(
        <div>
            <video
            id="my-player"
            class="video-js"
            controls
            preload="auto"
            poster="//vjs.zencdn.net/v/oceans.png"
            data-setup='{}'
            >
                 <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
                
  
    
            </video>
        </div>
    )
}