import React from 'react';


const Screen =(props)=>{
        const {activeLink,screenList} =props;
      
        const list=screenList.map(element => {
           return Object.keys(element)[0]
        });   
        return(
            <ul >
            <li style={activeLink==1 && style.bgColor || {background:'white'}}>{list[0]}</li>
            <li style={activeLink==2 && style.bgColor || {background:'white'}}>{list[1]}</li>
            <li style={activeLink==3 && style.bgColor || {background:'white'}}>{list[2]}</li>
            <li style={activeLink==4 && style.bgColor || {background:'white'}}>{list[3]}</li>
        </ul>
        )
  

}
const style={
    bgColor:{
        background:'lightBlue'
    }
}
export default Screen;