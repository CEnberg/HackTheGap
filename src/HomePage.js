// import React from 'react';
import {useNavigate} from "react-router-dom";

import './customcss.css'


import USSVG from "./res/US Map SVG.svg"

const HomePage = () => {

  const navigate = useNavigate();

  return (
  <>
  <nav class="navbar navbar-light bg-light justify-content-between">
      <span><a class="navbar-brand heading1" style={{ paddingLeft: "20px", fontSize: "28pt" }}>Invisible Histories</a>
        <span class="navbar-text" style={{ paddingLeft: "16px", paddingRight: "300px" }}>
          Discover our hidden past
        </span></span>
      <button class="btn-primary" style={{ position: "absolute", right: "20px" }} onClick={() => navigate(`/#`)}>Contribute</button>
    </nav>
      {/* <section class="pt-4 position:relative"> */}
        <div class="d-flex justify-content-between pt-2 pb-3 mx-auto" style={{ maxWidth: '1100px' }}>
          <div class="form-check form-check-inline">
            <input class="btn-check" type="radio" name="options" id="inlineCheckbox1" value="option1" checked />
            <label class="btn btn-outline-primary" for="inlineCheckbox1">LGBT+ History</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="btn-check" type="radio" name="options" id="inlineCheckbox2" value="option2" />
            <label class="btn btn-outline-primary" for="inlineCheckbox2">Black History</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="btn-check" type="radio" name="options" id="inlineCheckbox3" value="option3" />
            <label class="btn btn-outline-primary" for="inlineCheckbox3">AAPI History</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="btn-check" type="radio" name="options" id="inlineCheckbox4" value="option4" />
            <label class="btn btn-outline-primary" for="inlineCheckbox4">Latino History</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="btn-check" type="radio" name="options" id="inlineCheckbox5" value="option5" />
            <label class="btn btn-outline-primary" for="inlineCheckbox5">Native History</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="btn-check" type="radio" name="options" id="inlineCheckbox6" value="option6" />
            <label class="btn btn-outline-primary" for="inlineCheckbox6">Disability Rights History</label>
          </div>
        </div>
        <button class="map-marker" style={{ top: '650px', left: '755px' }}/> {/* Texas*/}
        <button class="map-marker" style={{ top: '300px', left: '861px' }} onClick={() => navigate('/StateLevel')} /> {/* MN */}
        <img src={USSVG} class="hero d-block mx-auto" />
      {/* </section><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous" alt="US Map"></script> */}
    </>
  );
}

export default HomePage;