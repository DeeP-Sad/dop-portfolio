import logo from "./logo.svg";
import "./App.css";
import "./Components/Navbar";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Research from "./Components/Research";
import Funding from "./Components/Funding";
import {BrowserRouter, Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="bg-black relative w-full h-screen">
      <div className="static">
      <div className="fixed z-10 top-0 left-0 right-0">
      <Navbar></Navbar>
      </div>
      <div className="relative bg-black">
      <div id="About" className="h-screen">
      <About/>
      </div>
      <div id="Research" className="h-screen">
      <Research/>
      </div>
      <div id="Funding" className="h-screen">
      <Funding/>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
