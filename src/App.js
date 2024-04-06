import "./App.css";
import SideBar from "./components/sidebar";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Resume from "./components/resume";
// import Projects from "./components/projects";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container custom_container mb-2">
          <div className="row custom_row">
            <div className="col-sm-12 col-lg-3 ">
              <SideBar />
            </div>
            <div className="col-sm-12 col-lg-9 mainarea_custom">
              <Navbar />
              <AnimatePresence exitBeforeEnter>
                <Routes>
                  <Route exact path="/" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  {/* <Route path="/projects" element={<Projects />} /> */}
                </Routes>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
