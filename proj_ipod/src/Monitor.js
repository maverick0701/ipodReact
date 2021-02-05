import React from 'react';
import Menu from './Menu'
import './Monitor.css';
import Home from './Home'
const Monitor =(props)=>{
    const {currentScreen,activeLink,activeScreen}=props;
        return(
            <div className='Monitor'>
                {currentScreen=='Home' && <Home />}
                {currentScreen=='Menu' && <Menu activeLink={activeLink} activeScreen={activeScreen}/>}
            </div>
        )
}

export default Monitor;