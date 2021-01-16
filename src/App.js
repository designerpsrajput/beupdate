import React from 'react';
import Header from './Header'; 
import Wrapper from './Wrapper';  
import { BrowserRouter} from "react-router-dom";
import { DataProvider } from './UseContext'; 

const App = () => {  
    return (
      
        <>
        <BrowserRouter>
          <DataProvider>
            <Header/> 
            <Wrapper /> 
            </DataProvider>
          </BrowserRouter>
       
      </>
    );
}

export default App;