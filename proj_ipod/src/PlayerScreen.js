import React from 'react';
import Allsong from './AllSong'
const PlayerScreen =(props)=>{
    const {activeLink,selectedPlayer}=props;
    
        return(
            <div >
               {selectedPlayer}
            </div>
        )
}

export default PlayerScreen;