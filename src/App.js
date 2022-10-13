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
      <div className="sticky top-0">
      <Navbar></Navbar>
      </div>
      <div className="">
      <div id="About" className="h-screen bg-yellow-500">
      <About/>
      </div>
      <div id="Research" className="h-screen bg-white">
      <Research/>
      </div>
      <div id="Funding" className="h-screen bg-slate-900">
      <Funding/>
      </div>
      </div>
    </div>
  );
}

export default App;
