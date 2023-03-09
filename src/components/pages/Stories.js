import React from "react";
import "./Stories.css";

function Stories() {
  return (
    <div className="stories">
      <div className="storiesContainer">
        <div className="headingStories">We create stories.</div>
        <p>
          Monochrome is a creative agency based in Chicago. We developed the
          Genesis Framework and build mobile-optimized themes for WordPress.
        </p>
        <p
          style={{ border: "1px solid grey", width: 50, marginTop: "35px" }}
        ></p>

        <div className="rowOne">
          <div className="img__new">
            <img
              className="storyImg"
              min-width="10px"
              src="https://demo.studiopress.com/monochrome/files/2017/04/sample-light-3-600x338.jpg"
              alt=""
            />
            <p className="para">OVERCOMING CREATIVE BLOCK</p>
            <p className="sml">Brian GardnerMay 1, 2017</p>
          </div>

          <div className="img__new">
            <img
              className="storyImg"
              min-width="10px"
              src="https://demo.studiopress.com/monochrome/files/2017/04/sample-light-4-600x338.jpg"
              alt=""
            />
            <p className="para">OVERCOMING CREATIVE BLOCK</p>
            <p className="sml">Brian GardnerMay 1, 2017</p>
          </div>

          <div className="img__new">
            <img
              className="storyImg"
              min-width="10px"
              src="https://demo.studiopress.com/monochrome/files/2017/04/sample-light-2-600x338.jpg"
              alt=""
            />
            <p className="para">THE PATH OF LEAST RESISTANCE</p>
            <p className="sml">Brian GardnerMay 1, 2017</p>
          </div>

          <div className="img__new">
            <img
              className="storyImg"
              min-width="10px"
              src="https://demo.studiopress.com/monochrome/files/2017/04/sample-light-1-600x338.jpg"
            />
            <p className="para">HOW TO REACH NEW HEIGHTS</p>
            <p className="sml">Brian GardnerMay 1, 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
