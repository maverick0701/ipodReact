import React from 'react';
import './musicPlayer.css'
const SongPlayer =(props)=>{
    const {selectedPlayer}=props;
    console.log(selectedPlayer.img)
    
        return(
            <div id='musicPlayer' >
                <div id='img'>
                    <img src=  {selectedPlayer.img} />
                </div>
                <div id='controls'>

                </div>
               
            </div>
        )
}

export default SongPlayer;