// import React from 'react';
import {useNavigate} from "react-router-dom";

import './App.css'

import tempMap from "./res/us-temp.jpg"

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="App">
      

      <header className="App-header">
        <img src={tempMap} alt="US Map"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className='go-to-page-two' onClick={() => navigate(`/StateLevel`)}>
        Redirection
        </button>
      </header>
    </div>
  );
}

export default HomePage;