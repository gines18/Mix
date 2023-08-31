import React from "react";
import CardContainer from "./CardContainer";
import Buttons from "./Buttons";
import Info from "./Info";
import { component } from './Data';


function App() {
  return (
    <>

      <Buttons />

      <Info component={component}/>
      <CardContainer />
   
    </>
  );
}

export default App;
