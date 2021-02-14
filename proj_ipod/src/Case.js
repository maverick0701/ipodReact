import React from 'react';
import Monitor from './Monitor';
import KeyPad from "./KeyPad";
import ZingTouch from 'zingtouch';
import './App.css';
const firebase = require('firebase/app');
import { faTheRedYeti } from '@fortawesome/free-brands-svg-icons';
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
           prevSelectedPlayer:undefined,
           musicList:[],
           imgList:[],
           play:false
       }
       this.rot=false;
       this.db=firebase.firestore();
   }
    mod=(n, m)=>
    {
      return ((n % m) + m) % m;
    }
    onPlay=()=>
    {
        if(this.state.activeScreen==4 && this.state.prevSelectedPlayer=='music')
        {
            let KeyPad=document.getElementsByClassName('KeyPad')[0];
            KeyPad.classList.add('clyleColor');
            var x = document.getElementById("audio");
            if(!this.state.play)
            {
               x.play();

            }
            else
            {
                x.pause();
            }
            this.setState({
                play:!this.state.play
            })
           
        }
    }
   onLeft=()=>
   {
       if(this.state.activeScreen!=4)
       {
        let currentLink=this.state.activeLink;
            currentLink=this.mod(currentLink-1,this.state.size);
            this.setState({
                activeLink:currentLink
            })
        }
        else if(this.state.activeScreen==4 && this.state.prevSelectedPlayer=='music')
        {
            let currentLink=this.state.activeLink;
            currentLink=this.mod(currentLink-1,this.state.size);
            let list=this.state.musicList.map((element)=>
            {
                return element;
            })
            let selectedPlayer=list[currentLink];

            this.setState({
                activeLink:currentLink,
                selectedPlayer:selectedPlayer,
                play:false
            })
        }
   }
   onRight=()=>
   {
        if(this.state.activeScreen!=4)
        {
        let currentLink=this.state.activeLink;
            currentLink=this.mod(currentLink+1,this.state.size);
            this.setState({
                activeLink:currentLink
            })
        }
        else if(this.state.activeScreen==4 && this.state.prevSelectedPlayer=='music')
        {
            let currentLink=this.state.activeLink;
            currentLink=this.mod(currentLink+1,this.state.size);
            let list=this.state.musicList.map((element)=>
            {
                return element;
            })
            let selectedPlayer=list[currentLink];

            this.setState({
                activeLink:currentLink,
                selectedPlayer:selectedPlayer,
                play:false
            })
        }
   }
   
   rotAnimation=()=>
   {
       
        var Case=document.getElementsByClassName('Case')[0];
        var KeyPad=document.getElementsByClassName('KeyPad')[0];
        var Monitor=document.getElementsByClassName('Monitor')[0];
        var Key=document.getElementsByClassName('Key5')[0];
        
        if(this.rot==false)
        {
            Case.style.transform=`rotateZ(-90deg)`;
            Case.style.transition=`all 0.2s ease-in-out`;
          
            KeyPad.style.transform=`rotateZ(90deg)`;
            KeyPad.style.transition=`all 0.2s ease-in-out`
            Monitor.style.transform=`rotateZ(90deg)`;
            Monitor.style.transition=`all 0.2s ease-in-out`;
            Monitor.style.top='9%';
            Monitor.style.left='-1%';
            Case.style.height='573px';
            Case.style.width='294px';
            KeyPad.style.left='4%';
            KeyPad.style.top='55%';
            Key.style.color='#ffffff';
            this.rot=true


        }
        else
        {
            Case.style.transform=`rotateZ(0deg)`;
            KeyPad.style.transform=`rotateZ(0deg)`;
            Monitor.style.transform=`rotateZ(0deg)`;
            Monitor.style.top='2%';
            Monitor.style.left='8%';
            Case.style.height='500px';
            Case.style.width='350px';
            KeyPad.style.left='14%';
            KeyPad.style.top='50%';
            Key.style.color='black';
            this.rot=false

        }
        
    
    }


   componentDidMount(){
       
    const item1={'Cover Flow':['Cover Flow']};
    const item2={'Music':['All Song','Artist','Album']};
    const item3={'Games':['Game']};
    const item4={'Setting':['Setting']};
    const comp1=[item1,item2,item3,item4];
    const screenList=[comp1];
    let musicList=[];
        // musicList=[
        //     {'title':'Music 1','src':'Music 1'},
        //     {'title':'Music 2','src':'Music 2'},
        //     {'title':'Music 3','src':'Music 3'},
        //     {'title':'Music 4','src':'Music 4'}
        // ]
        // console.log(musicList);
        musicList=this.db
        .collection('Allsongs')
        .orderBy('title')
        .onSnapshot((snapshots)=>
        {
            musicList=snapshots.docs.map((doc)=>
            {
              const data=doc.data();
              data['id']=doc.id;
              return data;
            })
            this.setState({
                musicList
            })
        })
        
    this.setState({
        screenList,
        musicList
        
    })
    var touchArea = document.getElementById('toucharea')
    var myRegion = new ZingTouch.Region(touchArea);
    const rotate=new ZingTouch.Rotate();
    // this.rotAnimation();
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
    let KeyPad=document.getElementsByClassName('KeyPad')[0];
    KeyPad.classList.remove('clyleColor');
    let activeScreen=this.state.activeScreen;
    const clickedLink=this.state.activeLink;
    let selectedPlayer=undefined;
        
       
        this.setState({
           activeLink:0,
           clickedLink:clickedLink,
           activeScreen:1,
           size:4,
           selectedPlayer,
           play:false
           
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
    let KeyPad=document.getElementsByClassName('KeyPad')[0];
    KeyPad.classList.remove('clyleColor');
        let activeScreen=this.state.activeScreen;
        const clickedLink=this.state.activeLink;
        let selectedPlayer='';
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
            prevSelectedPlayer=selectedPlayer;
        }
        if(activeScreen==2  && (clickedLink==0 || clickedLink==2 || clickedLink==3))
        {
            activeScreen=4;
            prevSelectedPlayer=selectedPlayer;
        }
        else if(activeScreen==2 && clickedLink==1)
        {
            
            let list=this.setSize(activeScreen,this.state.screenList[0],clickedLink);
            size=list.length;
            prevSelectedPlayer=selectedPlayer;
        }
        
        else if(activeScreen==3 && clickedLink==0)
        {
           
            let list=['music 1','music 2','music 3','music 4'];
            size=list.length;
            prevSelectedPlayer=selectedPlayer;
        }
        else if(activeScreen==3  && clickedLink!=0)
        {
            activeScreen=4;
            selectedPlayer=this.getSelectedPLayer(2,this.state.screenList[0],clickedLink);
            prevSelectedPlayer=selectedPlayer;
        }
        else if(activeScreen==4)
        {
            let list=this.state.musicList.map((element)=>
            {
                return element;
            })
            size=list.length;
            selectedPlayer=list[clickedLink];
            newActiveLink=clickedLink;
            prevSelectedPlayer='music'
        }
        
        
        this.setState({
           activeLink:newActiveLink,
           clickedLink:clickedLink,
           activeScreen,
           size:size,
           selectedPlayer,
           prevSelectedPlayer,
           play:false
           
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
            prevSelectedPlayer={this.state.prevSelectedPlayer}
            musicList={this.state.musicList}
            />
            <KeyPad    
            displayMenu={this.displayMenu} 
            onLeft={this.onLeft} 
            onRight={this.onRight} 
            onSelect={this.onSelect}
            rotAnimation={this.rotAnimation}
            onPlay={this.onPlay}
            play={this.state.play}
            />
            </div>
        );
    }
}

export default Case;