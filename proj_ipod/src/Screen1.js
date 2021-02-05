import React from 'react';


const Screen =(props)=>{
        const {activeLink,screenList} =props;
        return(
            <ul >
            <li style={activeLink==1 && style.bgColor || {background:'white'}}>{screenList[0]}</li>
            <li style={activeLink==2 && style.bgColor || {background:'white'}}>{screenList[1]}</li>
            <li style={activeLink==3 && style.bgColor || {background:'white'}}>{screenList[2]}</li>
            <li style={activeLink==4 && style.bgColor || {background:'white'}}>{screenList[3]}</li>
        </ul>
        )
  

}
const style={
    bgColor:{
        background:'lightBlue'
    }
}
export default Screen;