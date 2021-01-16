import React, { useContext } from 'react';  
import { Link } from 'react-router-dom'; 
import Innermsg from './Innermsg'; 
import Msgdata from './Msgdata'; 
import { DataContext } from './UseContext'; 


const Msg = (props) => {    
    const { indexcount, rewardvalue, togglevalue,handleStart } = useContext(DataContext)
    const [count, setIndex] = indexcount;
    const [Getreward, setGetreward] = rewardvalue;
    const [Gethide, setShow] = togglevalue;
    console.log(handleStart)
    
    return (
    <div className={Msgdata[count].mainClass}>
        <div className="z-index">
            <Innermsg  
                key={Msgdata[count].id}
                imgsrc={Msgdata[count].imgsrc}
                cname={Msgdata[count].cname}
                msg={Msgdata[count].msg} 
            />
            <p className={Gethide}>You have Got <span>{Getreward}</span>  Reaward Point.</p>
            <Link to="/" onClick={handleStart}  className="btn btn-info">{Msgdata[count].linktxt}</Link> 
           
        </div>
    </div>
    ) 
} 
export default Msg;