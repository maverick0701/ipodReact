import React from 'react';
import Screen1 from './Screen1'

const Menu =(props)=>{
        const {activeLink,activeScreen,screenList} =props;
       
        return(
            <div className='Menu'>
            {activeScreen==1 && 
            <Screen1 
            activeLink={activeLink}
            activeScreen={activeScreen}
            screenList={screenList[0]}
             />}
            </div>
        )
  

}
const style={
    bgColor:{
        background:'lightBlue'
    }
}
export default Menu;