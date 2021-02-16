import React from 'react';
import './musicPlayer.css';

const SongPlayer =(props)=>{
    const {selectedPlayer}=props;
    
  
    
        return(
            <div id='musicPlayer' >
                <div id='img'>
                    <img src=  {selectedPlayer.img} />
                </div>
                <div id='controls'>
                <audio controls="seeking" id="audio" src={selectedPlayer.src} type='audio/mpeg'></audio>
                </div>
              
				    
			   
                
               
            </div>
        )
}

export default SongPlayer;