import React from "react";
import twitter from "../images/TwitterIcon.svg";
import facebook from "../images/FacebookIcon.svg";
import instagram from "../images/InstagramIcon.svg";
import linkedin from "../images/LinkedinIcon.svg";
import github from "../images/GitHubIcon.svg";

function Footer() {
  return (
    <div id="footer">
      <img src={twitter} />
      <img src={facebook} />
      <img src={instagram} />
      <img src={linkedin} />
      <img src={github} />
    </div>
  );
}

export default Footer;
