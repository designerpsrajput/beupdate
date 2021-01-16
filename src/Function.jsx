import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function useStartTour() {
    const [count, setIndex] = useState(0);  
    const [Getreward, setGetreward] = useState(0); 
    const [Gethide, setShow] = useState('hide'); 
    
    const handleStart = () => {
        if (count < 4) {
        setIndex(count + 1);
        setGetreward(Getreward + 5);
        setShow('show'); 
        } else {
            setIndex(0);
        }
    };
    return {
        count, 
        Getreward,
        Gethide,
        handleStart
    };  
}
export default useStartTour;