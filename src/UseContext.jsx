import React, { useState, createContext } from 'react';

export const DataContext = createContext();
export const DataProvider = (props) => {
  const [count, setIndex] = useState(0);  
  const [Getreward, setGetreward] = useState(0); 
  const [Gethide, setShow] = useState('hide');
  const handleStart = () => {
    if (count < 4 && Getreward < 20) {
    setIndex(count + 1);
    setGetreward(Getreward + 5);
    setShow('show'); 
    } else {
        setIndex(0);
        setGetreward(20)
    }
};
    return(
        <DataContext.Provider value={{ indexcount: [count, setIndex], rewardvalue: [Getreward, setGetreward], togglevalue: [Gethide, setShow],handleStart }}>
            {props.children}
        </DataContext.Provider>
    )
}






