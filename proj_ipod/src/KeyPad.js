import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward} from '@fortawesome/free-solid-svg-icons';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt} from '@fortawesome/free-solid-svg-icons';
import { faPause} from '@fortawesome/free-solid-svg-icons';
const KeyPad=(props)=>{
        const {displayMenu,onLeft,onSelect,onRight,rotAnimation,onPlay,play}=props;
        
        return(
            <div  className='KeyPad' id='toucharea' >
                <div className="Key5" style={ { fontSize: 25 }} onClick={()=>rotAnimation()}><FontAwesomeIcon icon={faSyncAlt} /></div>
                <div className='KeyCircle' >
                    <div  className='Key1' style={{color:'#4e4e4e ',fontSize: 25}} onClick={()=>displayMenu('Menu')}>Menu</div>
                    <div className="Key2" style={ { fontSize: 25 }} onClick={()=>onLeft()}><FontAwesomeIcon icon={faBackward} /></div>
                    <div className="Key3" style={ { fontSize: 25 }} onClick={()=>onRight()}><FontAwesomeIcon icon={faForward} /></div>
                    <div className="Key4" style={ { fontSize: 25 }} onClick={()=>onPlay()}>
                        {play && <FontAwesomeIcon icon={faPause} />}
                        {!play && <FontAwesomeIcon icon={faPlay} />}</div>
                    
                </div>
                <div id='selectButton' onClick={()=>onSelect()}>
                    <h1 id='selectStyle'>Select</h1>
                </div>
                
            </div>
        );
    
}

export default KeyPad;