import React from "react";
import Navbar from "../inc/Navbar";
import Slider from "../inc/Slider";
import Brand from "./Brand";
import Experience from "./Experience";
import Footer from "./Footer";
import FooterSticky from "./FooterSticky";
import "./Home.css";
import Stories from "./Stories";

function Home() {
  return (
    <div>
      <div className="home">
      {/* <Navbar />  */}
        <Slider />
        <Experience />
        <Brand />
        <Stories />
        <Footer />
        {/* <FooterSticky/> */}
      </div>
    </div>
  );
}

export default Home;
