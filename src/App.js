import './App.css';
import React from "react";
import Header from "./ingredients/Header";
import Mainboard from "./ingredients/Mainboard";
import splash from "./api/splash";
import "./App.css";

/*Trick for making files quicker is using rfce and tab */
/*For any components don't forget to also import them above! */

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Header/>
     <Mainboard/>
      </header>
    </div>
  );
}

export default App;
