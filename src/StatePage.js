import React from 'react';
import {useNavigate} from "react-router-dom";

// import './App.css'
import './customcss.css'
import cityMap from "./res/MapScreenshot.png"

const StatePage = () => {

  const [showPopup, setShowPopup] = React.useState([false]);

  const options = ["LGBTQ+ History", "Black history", "AAPI History", "Latino History", "Native History", "Disability Rights History"];
  const styleProps = [{top: "530px", left: "805px"}, {top: "180px", left: "901px"}]

  const navigate = useNavigate();

  const makePopup = () => {
    return (
      <div className='cityInfo'>
        <p>More Info</p>
        <p> Text here </p>
        <button onClick={() => setShowPopup(false)}> Close </button>
      </div>
    )
  }

  const makeCityButton = (i) => {
    return <button className='map-marker' style={styleProps[i]} onClick={() => setShowPopup(true)}/>
  }

  return (
    <>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <span><a class="navbar-brand heading1" style={{ paddingLeft: "20px", fontSize: "28pt" }} onClick={() => navigate(-1)}>Invisible Histories</a>
            <span class="navbar-text" style={{ paddingLeft: "16px", paddingRight: "300px" }}>
                Discover our hidden past
            </span></span>
        <a class="btn-primary" style={{position: "absolute", right: "20px"}} href="#" role="button">Contribute</a>
      </nav>

      <section class="pt-5">
          <div class="content-section">
              <div class="row align-items-start">
                  <div class="col-4">
                      <a class="back-link" onClick={() => navigate(-1)}><i class="fa-solid fa-chevron-left pe-2" > </i>Back to National Map</a>
                          <div style={{paddingTop: "45px"}}>
                          <p class="eyebrow">Historical Overview</p>
                          <h2 class="heading2">St. Paul–Minneapolis</h2>
                          <p>The St. Paul-Minneapolis metro area, also known as the Twin Cities, is the largest metropolitan area in Minnesota and one of the most significant in the Upper Midwest. It comprises Minneapolis, the state's largest city, and St. Paul, the state capital, along with surrounding suburbs.</p>
                  </div>
                  <div class="mt-5">
                      <b>Click any point of interest on the map to learn more.</b>
                  </div>
              </div>
          <div class="col-8">
      {/* {styleProps.map(() => showPopup ? makePopup() : makeCityButton())} */}
        <div class="map-marker" style={{top: "530px", left: "805px"}}></div>
        <div class="map-marker" style={{top: "180px", left: "901px"}}></div>
            <img src={cityMap} style={{maxWidth: "900px", margin: "auto"}}/>
            <div class="d-flex justify-content-between pt-2 pb-2">
             {options.map((name, index) => (
              <div class="form-check form-check-inline">
                <label class="btn-outline-primary" for={"inlineCheckbox" + index}>{name}</label>
                <input class="btn-check" type="radio" name="options" id={"inlineCheckbox1" + index} value="option1" checked/>
              </div>))}
                      </div>
                  </div>
              </div>
          </div>
      </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/a34c0a9519.js" crossorigin="anonymous"></script>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <div className="State-page">
    //       <div className="LeftSide">
    //         <div>
    //           <button className='go-back' onClick={() => navigate(-1)}>
    //             Back
    //           </button>
    //         </div>
    //         <p>
    //           Info Info Info





    //           Info
    //         </p>
    //       </div>
          
    //       <div id="cityMap">
    //       <img className="cityMapTemp" src={cityMap} alt = "Twin Cities"/> {/* temp */}
    //         {showPopup ? <PopUp /> : <CityButton/>}
    //       <div class="d-flex justify-content-between pt-2 pb-2">
    //         {options.map((name, index) => (
    //           <div class="form-check form-check-inline">
    //             <input class="btn-check" type="radio" name="options" id={"inlineCheckbox1" + index} value="option1" checked/>
    //             <label class="btn btn-outline-primary" for={"inlineCheckbox" + index}>{name}}</label>
    //           </div>))}
    //       </div>
    //     </div>
    //     </div>
        
        

    //   </header>
    // </div>
  );
}

export default StatePage;