import React, { useContext } from 'react';
import { DataContext } from './UseContext'; 
import { Link } from 'react-router-dom';
import Menuitems from './Menuitems'; 
import Msgdata from './Msgdata'; 

const Leftside = (props) => { 
    const { indexcount, rewardvalue, togglevalue,handleStart } = useContext(DataContext)
    const [count, setIndex] = indexcount;
    return( 
        <>
           <div className={Msgdata[count].leftmenu}> 
                     {Menuitems.map((menuItems) => {
                        return (
                            <MenuLink 
                                key={menuItems.id}
                                menuname={menuItems.menuname} 
                                menuclass={menuItems.menuclass}
                            />
                        );
                    })}
                />
           </div> 
        </>
    );
}
const MenuLink = (props) => {
    return(
        <>
        <Link to="/" className={props.menuclass}>{props.menuname}</Link> 
        </>
    );
}
export {Leftside,MenuLink} ;