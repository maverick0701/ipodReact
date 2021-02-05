import React from 'react';
import Monitor from './Monitor';
import KeyPad from "./KeyPad";
import ZingTouch from 'zingtouch';
import './App.css';
class Case extends React.Component{
   constructor()
   {
       super();
       this.state={
           currentScreen:'Home',
           activeLink:1,
           angle:0,
           activeScreen:1,
           screenList:[]
       }
       
      
    
   }
   onSelect=()=>
   {
       console.log('selected');
   }
   onLeft=()=>
   {
    let currentLink=this.state.activeLink;
        if(currentLink==1)
        {
            currentLink=4;
            
        }
        else
        {
            currentLink--;
        }
        this.setState({
            activeLink:currentLink
        })
   }
   onRight=()=>
   {
        var currentLink=this.state.activeLink;
        if(currentLink==4)
        {
            currentLink=1;
            
        }
        else
        {
            currentLink++;
        }
    
        this.setState({
            activeLink:currentLink
        })
   }
   componentDidMount(){
       const item1={'item 1':['item 5','item 6','item 7','item 8']};
       const item2={'item 2':['item 9','item 10','item 11','item 12']};
       const item3={'item 3':['item 13','item 14','item 15','item 16']};
       const item4={'item 4':['item 17','item 18','item 19','item 20']};
        const comp1=[item1,item2,item3,item4];
        const screenList=[comp1];   
    this.setState({
        screenList
    })
    var touchArea = document.getElementById('toucharea')
    var myRegion = new ZingTouch.Region(touchArea);
   const rotate=new ZingTouch.Rotate();

   myRegion.bind(touchArea, rotate, (e)=>{
       
        if(this.state.angle==0)
        {
            this.state.angle=e.detail.angle;   
        }
        else{
            if(e.detail.angle-this.state.angle>15)
            {
                
                this.state.angle=e.detail.angle;
                var currentLink=this.state.activeLink;
                if(currentLink==1)
                {
                    currentLink=4;
                    
                }
                else
                {
                    currentLink--;
                }
                this.setState({
                    activeLink:currentLink
                })
                
            }
            if(e.detail.angle-this.state.angle<-15)
            {
                this.state.angle=e.detail.angle;
                var currentLink=this.state.activeLink;
                if(currentLink==4)
                {
                    currentLink=1;
                    
                }
                else
                {
                    currentLink++;
                }
               
                this.setState({
                    activeLink:currentLink
                })
            }
           
        }
});

  
        
        
    

   }
   displayMenu=(currentScreen)=>
   {
    this.setState({
        currentScreen: currentScreen
      })
   }
    render(){
        return(
            <div className='Case' id='parent-toucharea'>
                
            <Monitor  
            currentScreen={this.state.currentScreen} 
            activeLink={this.state.activeLink}
            activeScreen={this.state.activeScreen}
            screenList={this.state.screenList}
            />
            <KeyPad    
            displayMenu={this.displayMenu} 
            onLeft={this.onLeft} 
            onRight={this.onRight} 
            onSelect={this.onSelect}
            />
            </div>
        );
    }
}

export default Case;