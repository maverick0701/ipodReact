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
    const comp1=['item 1','item 2','item 3','item 4'];
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