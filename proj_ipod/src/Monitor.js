import React from 'react';
import Menu from './Menu'
import './Monitor.css';
import Home from './Home'
const Monitor =(props)=>{
    const {activeLink,activeScreen,screenList,clickedLink}=props;
        return(
            <div className='Monitor'>
                {activeScreen==0 && <Home />}
                {activeScreen!=0 && 
                <Menu 
                activeLink={activeLink} 
                activeScreen={activeScreen}
                screenList={screenList}
                clickedLink={clickedLink}
                 />}
            </div>
        )
}

export default Monitor;