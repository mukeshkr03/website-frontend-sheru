import React from "react";
import "./About";

function Gatenberg() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontWeight: 600,
          display: "flex",
          justifyContent: "center",
          marginTop: "90px",
          alignItems: "center",
          alignItems: "center",
        }}
      >
        GATUNBERG
      </h1>
      <p style = {{maxWidth : 400, minWidth : 200}}>
        Monochrome is a creative agency based in Chicago. We developed the
        Genesis Framework and build mobile-optimized themes for WordPress
        Monochrome is a creative agency based in Chicago. We developed the
        Genesis Framework and build mobile-optimized themes for WordPress.
      </p>
      <img
        width="100%"
        src="https://demo.studiopress.com/genesis-sample/files/2018/02/april-in-paris-1024x585.jpg"
        alt=""
      />
    </div>
  );
}

export default Gatenberg;
