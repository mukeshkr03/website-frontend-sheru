import React from "react";
import Slider from "../inc/Slider";
import Brand from "./Brand";
import Experience from "./Experience";
import Footer from "./Footer";
import "./Home.css";
import Stories from "./Stories";

function HomeNew() {
  return (
    <div>
      <div className="home">
        <Slider />
        <Experience/>
        <Brand />
        <Stories />
        <Footer />
      </div>
    </div>
  );
}

export default HomeNew;
