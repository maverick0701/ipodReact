import React from 'react';


const Screen =(props)=>{
        const {activeLink,screenList,activeScreen, clickedLink,musicList }=props;
        var list;
      
        if(activeScreen==1)
        {
            
            list=screenList.map(element => {
            return Object.keys(element)[0]
            });
        }
        else if(activeScreen==2)
        {
            
            let arr=screenList.map(element => {
                 for(let obj in element)
                 {
                   return element[obj];
                 }
                });
            list=arr[clickedLink];
        }

        else if(activeScreen==3)
        {
            
            list=musicList.map((element)=>
            {
                return element['title'];
            })
            
        }
        return(
            <ul >
            <li style={activeLink==0 && style.bgColor || {background:'white'}}>{list[0]}</li>
            <li style={activeLink==1 && style.bgColor || {background:'white'}}>{list[1]}</li>
            <li style={activeLink==2 && style.bgColor || {background:'white'}}>{list[2]}</li>
            <li style={activeLink==3 && style.bgColor || {background:'white'}}>{list[3]}</li>
        </ul>
        )
  

}
const style={
    bgColor:{
        background:'lightBlue'
    }
}
export default Screen;