import React, { useContext } from 'react';
import { DataContext } from './UseContext';   
import {Link} from 'react-router-dom';
import {LeaderBoard,Rewards,Profile} from './Icons';   
import Msgdata from './Msgdata'; 
import Rewardscount from './Rewardscount'; 

const Header = ()=> {
    const { indexcount, rewardvalue, togglevalue,handleStart } = useContext(DataContext)
    const [count, setIndex] = indexcount;
    return(
        <>
            <header>
                <div className="topLinks">
                    <Link to="/" className={Msgdata[count].Zinedx}><LeaderBoard /><span>Leadership Borad</span></Link>
                    <Link to="/" id="rewardi"><Rewards /><span>Rewards</span> <Rewardscount /></Link>
                    <Link to="/"><Profile /><span>My Profile</span></Link>
                </div>
            </header>
        </>
    );
}

export default Header;