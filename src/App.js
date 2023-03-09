import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Navbar from "./components/inc/Navbar";
import Layouts from "./components/pages/Layouts";
import Sample from "./components/pages/Sample";
import Getenberg from "./components/pages/Getenberg";
import "./App";
import HomeNew from "./components/pages/HomeNew";
import LearnMore from "./components/pages/LearnMore";
import FooterSticky from "./components/pages/FooterSticky";

function App() {
  return (
    <div className="app" style={{ minHeight: "100vh" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Layouts" element={<Layouts />} />
          <Route path="/Sample" element={<Sample />} />
          <Route path="/Getenberg" element={<Getenberg />} />
          <Route path="/HomeNew" element={<HomeNew />} />
          <Route path="/LearnMore" element={<LearnMore />} />
        </Routes>
        <FooterSticky />
      </Router>
    </div>
  );
}

export default App;
