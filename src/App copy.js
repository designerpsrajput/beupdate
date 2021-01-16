import React from 'react';
import Header from './Header'; 
import Wrapper from './Wrapper'; 
import useStartTour from './Function'; 
import { BrowserRouter} from "react-router-dom";

const App = () => { 
  const addData = useStartTour();
    return (
      
        <>
        <BrowserRouter>
          <Header RewarP={addData.Getreward} /> 
          <Wrapper /> 
        </BrowserRouter>
      </>
    );
}

export default App;