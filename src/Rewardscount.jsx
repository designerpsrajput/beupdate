import React, { useContext } from 'react';
import { DataContext } from './UseContext';   

const Rewardscount = () => {  
    const { indexcount, rewardvalue, togglevalue,handleStart } = useContext(DataContext)
    const [Getreward, setGetreward] = rewardvalue;
    return (
        <small id="Recount" className="Recount">{Getreward}</small>
    );
}

export default Rewardscount;