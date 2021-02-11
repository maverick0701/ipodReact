import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward} from '@fortawesome/free-solid-svg-icons';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt} from '@fortawesome/free-solid-svg-icons';
const KeyPad=(props)=>{
        const {displayMenu,onLeft,onSelect,onRight,rotAnimation}=props;
        
        return(
            <div  className='KeyPad' id='toucharea' >
                <div className="Key5" style={ { fontSize: 25 }} onClick={()=>rotAnimation()}><FontAwesomeIcon icon={faSyncAlt} /></div>
                <div className='KeyCircle' >
                    <div  className='Key1' style={{color:'silver' }} onClick={()=>displayMenu('Menu')}>Menu</div>
                    <div className="Key2" style={ { fontSize: 25 }} onClick={()=>onLeft()}><FontAwesomeIcon icon={faBackward} /></div>
                    <div className="Key3" style={ { fontSize: 25 }} onClick={()=>onRight()}><FontAwesomeIcon icon={faForward} /></div>
                    <div className="Key4" style={ { fontSize: 25 }}><FontAwesomeIcon icon={faPlay} /></div>
                    
                </div>
                <div id='selectButton' onClick={()=>onSelect()}>
                </div>
                
            </div>
        );
    
}

export default KeyPad;