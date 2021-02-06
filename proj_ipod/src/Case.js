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
           numScreen:3,
           angle:0,
           activeLink:0,
           activeScreen:0,
           screenList:[],
           clickedLink:0,
           numLink:[],
           sizeList:[]
       }
   }
    mod=(n, m)=>
    {
      return ((n % m) + m) % m;
    }
   onLeft=()=>
   {
    let currentLink=this.state.activeLink;
        currentLink=this.mod(currentLink-1,this.state.sizeList[this.state.activeScreen]);
        this.setState({
            activeLink:currentLink
        })
   }
   onRight=()=>
   {
        var currentLink=this.state.activeLink;
        currentLink=this.mod(currentLink+1,this.state.sizeList[this.state.activeScreen]);
               this.setState({
            activeLink:currentLink
        })
   }
   componentDidMount(){
    const item1={'Cover Flow':['item 5','item 6','item 7','item 8']};
    const item2={'Music':['All Song','Artish','Album','item 13']};
    const item3={'Games':['item 13','item 14','item 15','item 16']};
    const item4={'Setting':['item 17','item 18']};
    let screenSize=[];
    const comp1=[item1,item2,item3,item4];
    const screenList=[comp1]; 
    screenSize[0]=4; 
    screenSize[1]=comp1.length;
    let i=2;
    while(i<=comp1.length)
    {
        for(let k in comp1[i-1])
        {
            console.log(comp1[i-1][k])
            screenSize[i]=comp1[i-1][k].length
        }
        i++;
    }
    console.log(screenSize)
  
    this.setState({
        screenList,
        sizeList:screenSize
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
                let currentLink=this.state.activeLink;
                currentLink=this.mod(currentLink-1,this.state.sizeList[this.state.activeScreen+1]);
                this.setState({
                    activeLink:currentLink
                })
                
            }
            if(e.detail.angle-this.state.angle<-15)
            {
                this.state.angle=e.detail.angle;
                let currentLink=this.state.activeLink;
                currentLink=this.mod(currentLink+1,this.state.sizeList[this.state.activeScreen+1]);
                this.setState({
                    activeLink:currentLink
                })
            }
           
        }
});
   }
   displayMenu=(currentScreen)=>
   {
    let activeScreen=1;
    this.setState({
        activeLink:0,
        currentScreen: currentScreen,
        activeScreen
      })
   }
   onSelect=()=>
   {
        let activeScreen=this.state.activeScreen;
        const clickedLink=this.state.activeLink;
        activeScreen=this.mod(activeScreen+1,this.state.numScreen);
        this.setState({
           activeLink:0,
           clickedLink:clickedLink,
           activeScreen
           
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
            clickedLink={this.state.clickedLink}
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