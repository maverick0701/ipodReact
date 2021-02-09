import React from 'react';
import Menu from './Menu'
import './Monitor.css';
import PlayerScreen from './PlayerScreen';
import Home from './Home'
const Monitor =(props)=>{
    const {activeLink,activeScreen,screenList,clickedLink,getList,selectedPlayer}=props;
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
                 />}
                 {activeScreen==4 &&
                 <PlayerScreen 
                 selectedPlayer={selectedPlayer}
                 activeLink={activeLink}
                 />

                 }
            </div>
        )
}

export default Monitor;