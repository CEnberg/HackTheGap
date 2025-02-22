import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

import Page from "./Page";
import Page_2 from './Page_2';

const router = createBrowserRouter([
  <Route 
    exact path="/"
    element={<Page />}
  />,
  <Route 
    exact path="/aa"
    element={<Page_2 />}
  />
])

function App() {
  return <RouterProvider router={router} />
  
}

export default App;
