import React from 'react';
import Menu from './SelectionScreen/Menu'
import './Monitor.css';
import PlayerScreen from './SelectionScreen/PlayerScreen';

import Home from './Home'
const Monitor =(props)=>{
    const {activeLink,activeScreen,screenList,clickedLink,getList,selectedPlayer,prevSelectedPlayer,musicList}=props;
        return(
            <div className='Monitor'>
                {activeScreen==0 && <Home />}
                {(activeScreen==1 ||
                activeScreen==2   ||
                activeScreen==3) &&
                <Menu 
                activeLink={activeLink} 
                activeScreen={activeScreen}
                screenList={screenList}
                clickedLink={clickedLink}
                getList={getList}
                musicList={musicList}
                 />}
                 {activeScreen==4 &&
                 <PlayerScreen 
                 selectedPlayer={selectedPlayer}
                 activeLink={activeLink}
                 prevSelectedPlayer={prevSelectedPlayer}
                 />

                 }
            </div>
        )
}

export default Monitor;