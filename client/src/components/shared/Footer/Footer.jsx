import React from "react";
import "./Footer.css";
import "./FooterMedia.css";
import fb from "../../../img/fb-logo.png";
import twitter from "../../../img/twitter-logo.png";
import linkedin from "../../../img/linkedIn-logo.png";

function Footer() {
  return (
    <div className="footer">
      <h3 className="footer-text">Follow Us</h3>
      <div className="social-bar">
        <a
          href="https://www.facebook.com/BlackGirlsCodeOrg/"
          className="facebook"
          target="_blank"
        >
          <img className="fb-icon" src={fb} />
        </a>
        <a
          href="https://twitter.com/BlackGirlsCode?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          className="twitter"
          target="_blank"
        >
          <img className="twitter-icon" src={twitter} />
        </a>
        <a
          href="https://www.linkedin.com/company/black-girls-code/"
          className="linkedin"
          target="_blank"
        >
          <img className="linkedin-icon" src={linkedin} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
