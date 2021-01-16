import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './avatar.jpg'; 
import Reward from './reward.gif';
 

const Msgdata = [
    
    {
        id:'d1',
        imgsrc:Avatar,
        cname:"img_avatar",
        msg:"Welcome Our BeSingular Buddy Bot Is Here To Guide You.A Netflix Orignal Series",  
        linktxt:"Start tour!", 
        mainClass:"msgBox",
        Zinedx:"",
        leftmenu:"letfMenu",
        
    },
    {
        id:'d2',
        imgsrc:Reward,
        cname:"img_reward",
        msg:"Check Out Leadership Board Folks",
        linktxt:"Get More!", 
        mainClass:"msgBox overlay screen1",
        Zinedx:"zindex", 
        leftmenu:"letfMenu",
    },
    {
        id:'d3',
        imgsrc:Reward,
        cname:"img_reward",
        msg:"Awesome! Check Out Your CV",
        linktxt:"Get More!", 
        mainClass:"msgBox overlay screen2",
        Zinedx:"", 
        leftmenu:"letfMenu zindex",
    },
    {
        id:'d4',
        imgsrc:Reward,
        cname:"img_reward",
        msg:"Do You have an awesome project to show?",
        linktxt:"Get More!", 
        mainClass:"msgBox overlay screen3",
        Zinedx:"", 
        leftmenu:"letfMenu zindex2",
    },
    {
        id:'d5',
        imgsrc:Reward,
        cname:"img_reward",
        msg:"BeSingular Buddy Bot Is Here to help!",
        linktxt:"Finished Tour!", 
        mainClass:"msgBox overlay screen4",
        Zinedx:"", 
        leftmenu:"letfMenu",
    },
     
];

export default Msgdata;