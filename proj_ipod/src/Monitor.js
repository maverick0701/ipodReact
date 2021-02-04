import React from 'react';
import Menu from './Menu'
import './Monitor.css';
import Home from './Home'
const Monitor =(props)=>{
    const {currentScreen,activeLink}=props;
        return(
            <div className='Monitor'>
                {currentScreen=='Home' && <Home />}
                {currentScreen=='Menu' && <Menu activeLink={activeLink} />}
            </div>
        )
}

export default Monitor;