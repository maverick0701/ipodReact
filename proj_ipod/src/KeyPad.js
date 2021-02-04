import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward} from '@fortawesome/free-solid-svg-icons';
import { faPlay} from '@fortawesome/free-solid-svg-icons';

const KeyPad=(props)=>{
        const {displayMenu}=props;
        
        return(
            <div  className='KeyPad' >

                <div className='KeyCircle'id='toucharea' >
                    <div  className='Key1' style={{color:'silver' }} onClick={()=>displayMenu('Menu')}>Menu</div>
                    <div className="Key2" style={ { fontSize: 25 }}><FontAwesomeIcon icon={faBackward} /></div>
                    <div className="Key3" style={ { fontSize: 25 }}><FontAwesomeIcon icon={faForward} /></div>
                    <div className="Key4" style={ { fontSize: 25 }}><FontAwesomeIcon icon={faPlay} /></div>
                </div>
            </div>
        );
    
}

export default KeyPad;