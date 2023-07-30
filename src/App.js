import './App.css';
import React from "react";
import Header from "./ingredients/Header";

/*For any components don't forget to also import them above! */

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Header/>
     <h1>Mainboard</h1>
      </header>
    </div>
  );
}

export default App;
