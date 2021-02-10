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
           numScreen:5,
           angle:0,
           activeLink:0,
           activeScreen:0,
           screenList:[],
           clickedLink:0,
           size:4,
           selectedPlayer:undefined,
           prevSelectedPlayer:undefined
       }
   }
    mod=(n, m)=>
    {
      return ((n % m) + m) % m;
    }
   onLeft=()=>
   {
    let currentLink=this.state.activeLink;
        currentLink=this.mod(currentLink-1,this.state.size);
        this.setState({
            activeLink:currentLink
        })
   }
   onRight=()=>
   {
        var currentLink=this.state.activeLink;
        currentLink=this.mod(currentLink+1,this.state.size);
               this.setState({
            activeLink:currentLink
        })
   }
   componentDidMount(){
    const item1={'Cover Flow':['Cover Flow']};
    const item2={'Music':['All Song','Artish','Album']};
    const item3={'Games':['Game']};
    const item4={'Setting':['Setting']};
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
            
            screenSize[i]=comp1[i-1][k].length
        }
        i++;
    }
   
  
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
                currentLink=this.mod(currentLink-1,this.state.size);
                this.setState({
                    activeLink:currentLink
                })
                
            }
            if(e.detail.angle-this.state.angle<-15)
            {
                this.state.angle=e.detail.angle;
                let currentLink=this.state.activeLink;
                currentLink=this.mod(currentLink+1,this.state.size);
                this.setState({
                    activeLink:currentLink
                })
            }
           
        }
});
   }
   displayMenu=(currentScreen)=>
   {
    let activeScreen=this.state.activeScreen;
    const clickedLink=this.state.activeLink;
    let selectedPlayer=undefined;
        
       
        this.setState({
           activeLink:0,
           clickedLink:clickedLink,
           activeScreen:1,
           size:4,
           selectedPlayer
           
       })
   }
   setSize=(activeScreen,screenList,clickedLink)=>
   {
        let list;
            
        if(activeScreen==1)
        {
            list=screenList.map(element => {
            return Object.keys(element)[0]
            });
        }
        if(activeScreen==2)
        {
            let arr=screenList.map(element => {
                for(let obj in element)
                {
                return element[obj];
                }
                });
            list=arr[clickedLink];
        }
        return list;
   }
   getSelectedPLayer(activeScreen,screenList,clickedLink)
   {
       let list;
        if(activeScreen==1)
        {
            list=screenList.map(element => {
            return Object.keys(element)[0]
            });
            list=list[clickedLink];
        }
        if(activeScreen==2)
        {
            
            let arr=screenList.map(element => {
                for(let obj in element)
                {
                return element[obj];
                }
                });
                
            list=arr[1][clickedLink];
            
           
        }
        return list;
   }
   onSelect=()=>
   {
        let activeScreen=this.state.activeScreen;
        const clickedLink=this.state.activeLink;
        let selectedPlayer=this.state.selectedPlayer;
        let prevSelectedPlayer=this.state.prevSelectedPlayer;
        let newActiveLink=0;
        if(activeScreen!=0 && activeScreen!=4)
        {
            selectedPlayer=this.getSelectedPLayer(activeScreen,this.state.screenList[0],clickedLink);
        }
        
    
        activeScreen=this.mod(activeScreen+1,this.state.numScreen);
        let size=4;
        if(activeScreen==1)
        {
            let list=this.setSize(activeScreen,this.state.screenList[0],clickedLink);
            size=list.length;
        }
        if(activeScreen==2  && (clickedLink==0 || clickedLink==2 || clickedLink==3))
        {
            activeScreen=4
        }
        else if(activeScreen==2 && clickedLink==1)
        {
            
            let list=this.setSize(activeScreen,this.state.screenList[0],clickedLink);
            size=list.length;
        }
        
        else if(activeScreen==3 && clickedLink==0)
        {
           
            let list=['music 1','music 2','music 3','music 4'];
            size=list.length;
        }
        else if(activeScreen==3  && clickedLink!=0)
        {
            activeScreen=4;
            selectedPlayer=this.getSelectedPLayer(2,this.state.screenList[0],clickedLink);
        }
        else if(activeScreen==4)
        {
            let list=['music 1','music 2','music 3','music 4'];
            size=list.length;
            selectedPlayer=list[clickedLink];
            newActiveLink=clickedLink;
        }
        prevSelectedPlayer=selectedPlayer;
        this.setState({
           activeLink:newActiveLink,
           clickedLink:clickedLink,
           activeScreen,
           size:size,
           selectedPlayer,
           prevSelectedPlayer
           
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
            selectedPlayer={this.state.selectedPlayer}
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