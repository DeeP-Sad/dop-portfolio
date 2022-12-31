import logo from "./logo.svg";
import "./App.css";
import "./Components/Navbar";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Research from "./Components/Research";
import Funding from "./Components/Funding";
import Group from "./Components/Group";
import Openings from "./Components/Openings"
import Others from "./Components/Others"
import Publications from "./Components/Publications"
import Seminars from "./Components/Seminars"
import {BrowserRouter, Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="bg-black relative w-full h-screen">
      <div className="static">
      <div className="fixed z-10 top-0 left-0 right-0">
      <Navbar></Navbar>
      </div>
      <div className="relative bg-black">
      <div id="About" className="h-fit">
      <About/>
      </div>
      <div id="Research" className="h-fit">
      <Research/>
      </div>
      <div id="Funding" className="h-fit">
      <Funding/>
      </div>
      <div id="Group" className="h-fit">
      <Group/>
      </div>
      <div id="Openings" className="h-fit">
      <Openings/>
      </div>
      <div id="Others" className="h-fit">
      <Others/>
      </div>
      <div id="Publications" className="h-fit">
      <Publications/>
      </div>
      <div id="Seminars" className="h-fit">
      <Seminars/>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
