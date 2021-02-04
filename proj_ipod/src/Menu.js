import React from 'react';


const Menu =(props)=>{
        const {activeLink} =props;
        return(
            <ul className='Menu'>
            <li style={activeLink==1 && style.bgColor || {background:'white'}}>Item 1</li>
            <li style={activeLink==2 && style.bgColor || {background:'white'}}>Item 2</li>
            <li style={activeLink==3 && style.bgColor || {background:'white'}}>Item 3</li>
            <li style={activeLink==4 && style.bgColor || {background:'white'}}>Item 4</li>
        </ul>
        )
  

}
const style={
    bgColor:{
        background:'lightBlue'
    }
}
export default Menu;