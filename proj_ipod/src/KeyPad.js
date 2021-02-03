import React from 'react';
import { render } from 'react-dom';
import './App.css';
class KeyPad extends React.Component{
   
    render(){
        return(
            <div className='KeyPad'>
                <div className='KeyCircle'>
                    <div className='Key1'>key 1</div>
                    <div className="Key2">key 2</div>
                    <div className="Key3">key 3</div>
                    <div className="Key4">key 4</div>
                </div>
            </div>
        );
    }
}

export default KeyPad;