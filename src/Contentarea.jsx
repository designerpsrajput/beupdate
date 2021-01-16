import ReactDOM from 'react-dom';
import React from 'react';
import Msg from './Msg';
import Msgdata from './Msgdata'; 

const Contentarea = (props) => {

    return(
        <>
           <div  className="contentArea">
               <Msg /> {props.title}
            </div> 
        </>
    );
} 

export default Contentarea;