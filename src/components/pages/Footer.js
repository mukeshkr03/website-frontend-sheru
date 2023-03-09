import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#0693e3",
        alignItems: "center",
        padding : "40px",
        fontFamily: "Georgia",
        color : "white",
        marginBottom : "155px",
        zIndex : 2
      }}
    >
      Hit the ground running with a minimalist look.
      <Link to = "./LearnMore">
      <button style = {{marginLeft : 15, backgroundColor : "white", color : "black", border : "none", borderRadius : "3.5px"}}>Learn More</button>
      </Link>
    </div>
  );
}

export default Footer;
