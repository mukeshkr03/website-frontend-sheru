import React from "react";
import { Link } from "react-router-dom";
import "./FooterSticky.css";

function FooterSticky() {
  return (
    <div className="footerStickyNew">
      <div
        className="footerSticky"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link className="navbar-brand" to="/">
          <img
            className="footerImg"
            style={{ cursor: "pointer", marginLeft: "15px" }}
            height="40px"
            src="https://demo.studiopress.com/monochrome/wp-content/themes/monochrome-pro/images/logo-white.png"
          />
          <p>Handcrafted with &hearts; in Chicago · Powered by StudioPress</p>
          <p className="paraFooter">FACEBOOK--TWITTER--INSTAGRAM</p>
        </Link>
      </div>
    </div>
  );
}

export default FooterSticky;
