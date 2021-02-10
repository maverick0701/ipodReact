import React from 'react';
import Allsong from './AllSong'
const PlayerScreen =(props)=>{
    const {activeLink,selectedPlayer,prevSelectedPlayer}=props;
   
    
        return(
            <div >
             
               {prevSelectedPlayer=='music' && selectedPlayer['title']}<br />
               {prevSelectedPlayer=='music' &&selectedPlayer['src']}
               {prevSelectedPlayer!='music' && selectedPlayer}
            </div>
        )
}

export default PlayerScreen;