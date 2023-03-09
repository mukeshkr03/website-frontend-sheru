import React from "react";
import { Link } from "react-router-dom";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="experience__container">
        <div className="heading__experience">We build experience.</div>
        <p style={{ minWidth: "200px" }}>
          A minimalist approach is the only way to design a website.
        </p>
        <p
          style={{ border: "1px solid grey", width: 50, marginTop: "35px" }}
        ></p>
        <div
          className="split"
          style={{
            display: "flex",
            marginBottom: "30px",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 30,
            marginTop: "60px",
          }}
        >
          <div
            style={{
              //   margin: "10px",
              fontFamily: '"Open Sans Condensed", "sans-serif"',
              maxHeight: "400px",
              maxWidth: "300px",
            }}
          >
            <h3 style={{ fontSize: "20px" }}>DESIGN</h3>
            <div className="small">
              With an emphasis on typography, white space, and mobile-optimized
              design, your website will look absolutely breathtaking.
            </div>
            <br />
            <Link to="/LearnMore">
              <button style = {{borderRadius : "5px"}}>LEARN MORE</button>
            </Link>
          </div>
          <div
            style={{
              //   margin: "10px",
              fontFamily: '"Open Sans Condensed", "sans-serif"',
              maxHeight: "400px",
              maxWidth: "300px",
              minWidth: "200px",
            }}
          >
            <h3 style={{ fontSize: "20px" }}>CONTENT</h3>
            <div className="small">
              Our team will teach you the art of writing audience-focused
              content that will help you achieve the success you truly deserve.
            </div>
            <br />
            <Link to="/LearnMore">
              <button style = {{borderRadius : "5px"}}>LEARN MORE</button>
            </Link>
          </div>
          <div
            style={{
              //   margin: "10px",
              fontFamily: '"Open Sans Condensed", "sans-serif"',
              maxHeight: "400px",
              maxWidth: "300px",
              minWidth: "200px",
            }}
          >
            <h3 style={{ fontSize: "20px" }}>STRATEGY</h3>
            <div className="small">
              We help creative entrepreneurs build their digital business by
              focusing on three key elements of a successful online platform.
            </div>
            <br />
            <Link to="/LearnMore">
              <button style = {{borderRadius : "5px"}}>LEARN MORE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
