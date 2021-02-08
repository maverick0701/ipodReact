import React from 'react';
const PlayerScreen =(props)=>{
    const {selectedPlayer}=props;
    
        return(
            <div className='Monitor'>
                Player Screen Playing: {selectedPlayer}
            </div>
        )
}

export default PlayerScreen;