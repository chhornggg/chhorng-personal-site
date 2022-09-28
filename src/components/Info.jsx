import React from "react";
import myPic from "../images/my_pic.jpeg";
import mail from "../images/Mail.svg";

function Info() {
  return (
    <div id="info">
      <img src={myPic} className="info--pic" />
      <h1 className="info--name">Seng Echhorng</h1>
      <h5 className="info--pos">Frontend Developer</h5>
      <h6 className="info--text">sengechhorng.website</h6>
      <div className="info--btn">
        <button className="mail-btn">
          <img src={mail} />
          <h4>Email</h4>
        </button>
      </div>
    </div>
  );
}

export default Info;
