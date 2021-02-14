import React from 'react';
import './musicPlayer.css';
import Song from './music/Song1.mp3'
const SongPlayer =(props)=>{
    const {selectedPlayer}=props;
    
  
    
        return(
            <div id='musicPlayer' >
                <div id='img'>
                    <img src=  {selectedPlayer.img} />
                </div>
                <div id='controls'>
                <audio controls="seeking" id="audio" src={Song}></audio>
                </div>
              
				    
			   
                
               
            </div>
        )
}

export default SongPlayer;