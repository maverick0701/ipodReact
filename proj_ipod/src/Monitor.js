import React from 'react';
import Menu from './Menu'
import './Monitor.css';
class Monitor extends React.Component{
   
    render(){
        return(
            <div className='Monitor'>
                <Menu />
                Screen
            </div>
        );
    }
}

export default Monitor;