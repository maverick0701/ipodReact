import React from 'react';
import './Player.css'
const Player=(props)=>{
    const {activeLink,selectedPlayer,prevSelectedPlayer}=props;
    
    let selectedPlayer1=selectedPlayer.split(" ").join("");
    
        return(
            <div id={selectedPlayer1}>
            </div>
            
        )
}

export default Player;