import React from 'react';
import Monitor from './Monitor';
import KeyPad from "./KeyPad";
import './App.css'
class Case extends React.Component{
   
    render(){
        return(
            <div className='Case'>
            <Monitor />
            <KeyPad />
            </div>
        );
    }
}

export default Case;