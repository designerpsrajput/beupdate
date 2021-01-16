import React from 'react';
import  {Leftside,MenuLink} from './Leftside';
import Contentarea from './Contentarea';
import {Chat} from './Icons'; 
import { Link } from 'react-router-dom'; 


const Wrapper = () => {
    return(
        <>
        <div className="wrapper">
            <div className="row">
                <div className="col-sm-4">
                    <Leftside />
                </div>
                <div className="col-sm-8">
                    <Contentarea /> 
                </div>
            </div> 
        </div> 
        <Link to="/" id="chatBot" className="chatBox"><Chat />Chat Bot</Link>
        </>
    );
}

export default Wrapper;