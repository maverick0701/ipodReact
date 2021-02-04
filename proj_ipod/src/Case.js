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
           activeLink:1
       }
   }
   componentDidMount(){
  
    // var parentTouchArea = document.getElementById('parent-toucharea')
    var touchArea = document.getElementById('toucharea')
    var myRegion = new ZingTouch.Region(touchArea);
   const rotate=new ZingTouch.Rotate();

   myRegion.bind(touchArea, rotate, function(e){
	console.log(e.detail.angle,e.detail.distanceFromLast);
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
            />
            <KeyPad    displayMenu={this.displayMenu}/>
            </div>
        );
    }
}

export default Case;