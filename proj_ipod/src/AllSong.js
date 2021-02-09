import React from 'react';

const Allsong =(props)=>{
    const {activeLink}=props;
    
        return(
            <div >
            <li style={activeLink==0 && style.bgColor || {background:'white'}}>List 1</li>
            <li style={activeLink==1 && style.bgColor || {background:'white'}}>List 2</li>
            <li style={activeLink==2 && style.bgColor || {background:'white'}}>List 3</li>
            <li style={activeLink==3 && style.bgColor || {background:'white'}}>List 4</li>
            </div>
        )
}

export default Allsong;
const style={
    bgColor:{
        background:'lightBlue'
    }
}