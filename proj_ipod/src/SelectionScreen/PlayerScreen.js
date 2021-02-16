import React from 'react';
import Allsong from './AllSong';
import Player from './Player';
import SongPlayer from '../SongPlayer';
import musicPlayer from '../SongPlayer'
const PlayerScreen =(props)=>{
    const {activeLink,selectedPlayer,prevSelectedPlayer}=props;
   console.log(selectedPlayer);
    
        return(
            <div >
             
               {prevSelectedPlayer=='music' && 
               <SongPlayer 
               activeLink={activeLink}
               selectedPlayer={selectedPlayer}
               prevSelectedPlayer={prevSelectedPlayer}
               />}<br />
               
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