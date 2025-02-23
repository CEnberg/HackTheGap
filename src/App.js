// import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./HomePage";
import StatePage from './StatePage';



function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route
                exact path="/"
                element={<HomePage />}
              />
              <Route
                exact path="/StateLevel"
                element={<StatePage />}
              />
              <Route
                exact path="/moreInfo"
              />
          </Routes>
      </BrowserRouter>
    </>
);
  
}

export default App;
