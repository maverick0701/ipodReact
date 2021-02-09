import React from 'react';
import Allsong from './AllSong'
const PlayerScreen =(props)=>{
    const {activeLink,selectedPlayer}=props;
    
        return(
            <div >
               {selectedPlayer=='All Song' && 
                <Allsong 
                activeLink={activeLink}
                />
                }
            </div>
        )
}

export default PlayerScreen;