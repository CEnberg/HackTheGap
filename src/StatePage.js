import React from 'react';
import {useNavigate} from "react-router-dom";

import './App.css'
import cityMap from "./res/city-temp.png"

const StatePage = () => {

  const [showPopup, setShowPopup] = React.useState(false);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"];

  const navigate = useNavigate();

  const PopUp = () => {
    return (
      <div className='cityInfo'>
        <p>More Info</p>
        <p> Text here </p>
        <button onClick={() => setShowPopup(false)}> Close </button>
      </div>
    )
  }

  const CityButton = () => {
    return <button className='cityButton' onClick={() => setShowPopup(true)}> Click here! </button>
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="State-page">
          <div className="LeftSide">
            <div>
              <button className='go-back' onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
            <p>
              Info Info Info





              Info
            </p>
          </div>
          
          <div id="cityMap">
          <img className="cityMapTemp" src={cityMap} alt = "Twin Cities"/> {/* temp */}
            {showPopup ? <PopUp /> : <CityButton/>}
          <div id="checkBoxes" className="allOptions">
            {options.map((name) => (
              <span className="option">
                <input type="checkbox" />
                {name}
              </span>))}
          </div>
        </div>
        </div>
        
        

      </header>
    </div>
  );
}

export default StatePage;