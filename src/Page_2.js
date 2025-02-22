import React from 'react';
import {useNavigate} from "react-router-dom";

const Page_2 = () => {

    const navigate = useNavigate();

    return (
        <div className="App">
              Learn React
              <button className = 'goBack' onClick={() => navigate(-1)}>
                Go back
              </button>
        </div>
      );
}

export default Page_2;