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
    var touchArea = document.getElementById('toucharea');
    console.log(touchArea);
   
   }
   displayMenu=(currentScreen)=>
   {
    this.setState({
        currentScreen: currentScreen
      })
   }
    render(){
        return(
            <div className='Case'>
                
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