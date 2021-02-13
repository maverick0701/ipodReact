import React from 'react';
import Allsong from './AllSong'
import Player from './Player'
const PlayerScreen =(props)=>{
    const {activeLink,selectedPlayer,prevSelectedPlayer}=props;
   
    
        return(
            <div >
             
               {prevSelectedPlayer=='music' && selectedPlayer['title']}<br />
               {prevSelectedPlayer=='music' &&selectedPlayer['src']}
               {prevSelectedPlayer!='music' && 
               <Player 
               activeLink={activeLink}
               selectedPlayer={selectedPlayer}
               prevSelectedPlayer={prevSelectedPlayer}
                />}
               
            </div>
        )
}

export default PlayerScreen;