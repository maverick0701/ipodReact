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
           numScreen:4,
           angle:0,
           activeLink:0,
           activeScreen:0,
           screenList:[],
           clickedLink:0,
           numLink:[],
           sizeList:[],
           size:1
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
    let activeScreen=1;
    const clickedLink=this.state.activeLink;
    let size=1;
    if(activeScreen!=0 && activeScreen!=3)
    {
        size=this.setSize(activeScreen,this.state.screenList[0],clickedLink);
    }
    this.setState({
        activeLink:0,
        clickedLink:clickedLink,
        activeScreen,
        size:size
        
    })
   }
   setSize=(activeScreen,screenList,clickedLink)=>
   {
        var list;
            
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
        return list.length;
   }
   onSelect=()=>
   {
        let activeScreen=this.state.activeScreen;
        const clickedLink=this.state.activeLink;
        activeScreen=this.mod(activeScreen+1,this.state.numScreen);
        let size=1;
        if(activeScreen!=0 && activeScreen!=3)
        {
            size=this.setSize(activeScreen,this.state.screenList[0],clickedLink);
        }
        if((clickedLink==0 || clickedLink==2 || clickedLink==3) && activeScreen-1==1)
        {
            activeScreen=3
        }
        this.setState({
           activeLink:0,
           clickedLink:clickedLink,
           activeScreen,
           size:size
           
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