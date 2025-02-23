import { useState } from "react";
import Tlogo from "/Twitter.png"
import myLogo from "/logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <div className="maincontainer">
      <header className="header">
      <h1 className = "maintext">
          The Inanic Codex
        
        <a href="https://x.com/Ina_den_" target="_blank">
          <img src={myLogo} className="logo" alt="My logo" />

        </a>
      </h1>
     
      <h1 className = "callaction"> 
      <a href="#" className="header-action">The Codex</a>
      <a href="#" className="header-action">Contact</a></h1>

      </header>
    <main className="content">
        <div className="large-image">
          <p></p>
        </div>
      </main>


       {/* Fixed Footer */}
       <footer className="footer">
        <p>&copy; 2025 The Inanic Codex
        <a href = "https://x.com/Ina_den_" >
          <img src={Tlogo} className="logo" alt="My logo"></img>
      </a>
        </p>
        
      </footer>

    </div>
    </>
  );
}

export default App;
