import React from "react";
import "./Brand.css";

function Brand() {
  return (
    <div className="brand">
      <div className="brandContainer">
        <div className="headingBrand">We design brands.</div>
        <p>
          Monochrome is a creative agency based in Chicago. We developed the
          Genesis Framework and build mobile-optimized themes for WordPress.
        </p>
        <p style={{ border: "1px solid grey", width: 50, marginTop : 14}}></p>
        <div className="Items">
          <div className="textItem">lesacenirs</div>
          <div className="textItem">avec'simple</div>
          <div className="textItem">WHITESPACE</div>
        </div>
      </div>
    </div>

  );
}

export default Brand;
