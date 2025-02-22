import React from 'react';
import {useNavigate} from "react-router-dom";

const Page = () => {

    const navigate = useNavigate();

    return (
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <button className='go-to-page-two' onClick={() => navigate(`/aa`)}>
            Redirection
          </button>
        </div>
      );
}

export default Page;