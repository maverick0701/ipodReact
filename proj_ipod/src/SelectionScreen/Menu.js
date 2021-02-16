import React from 'react';
import Screen1 from './Screen1'

const Menu =(props)=>{
        const {activeLink,activeScreen,screenList,clickedLink,getList,musicList} =props;
       
        return(
            <div className='Menu'>
            {activeScreen==1 && 
            <Screen1 
            activeLink={activeLink}
            activeScreen={activeScreen}
            screenList={screenList[0]}
            clickedLink={clickedLink}
            getList={getList}
             />}
             {activeScreen==2 && 
            <Screen1 
            activeLink={activeLink}
            activeScreen={activeScreen}
            screenList={screenList[0]}
            clickedLink={clickedLink}
             />}
             {activeScreen==3 &&
             <Screen1
             activeLink={activeLink}
             activeScreen={activeScreen}
             screenList={screenList}
             clickedLink={clickedLink}
             musicList={musicList}
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