import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
          I am @Saksijas and i like to build web3 stuff :)
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me!
        </button>
      </div>
    </div>
  );
}
