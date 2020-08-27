import React from "react";
import "./Search.css";
import "./SearchMedia.css";
import fb from "../../../img/blk-fb-icon.png";
import twitter from "../../../img/blk-twitter-icon.png";
import linkedin from "../../../img/blk-linkedin-icon.png";

export default function Search() {
  return (
    <div className="search-div">
      <div className="search-social">
        <div className="social-text">Follow Us!</div>
        <a href="https://www.facebook.com/BlackGirlsCodeOrg/" target="_blank">
          <img className="fb-icon" src={fb} />
        </a>
        <a
          href="https://twitter.com/BlackGirlsCode?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
        >
          <img className="twitter-icon" src={twitter} />
        </a>
        <a
          href="https://www.linkedin.com/company/black-girls-code/"
          target="_blank"
        >
          <img className="linkedin-icon" src={linkedin} />
        </a>
      </div>
      <div className="search-container">
        <input type="text" className="search" placeholder="Search"></input>
        <button className="search-btn">DONATE</button>
      </div>
    </div>
  );
}
