import React from "react";
import p1 from "../images/cladding.jpg";
import p2 from "../images/solar.jpg";
import p3 from "../images/curved.jpg";
import p4 from "../images/ventilator.jpg";
import p5 from "../images/curved_1.jpg";

function Pro() {
  return (
    <>
      <div className="pro">
        <h1>Our Projects</h1>
        <p id="border"></p>
        <div id="list">
          <ul>
            <li>WALL CLADING</li>/<li>SOLAR FRAME</li>/<li>ROOF VENTILATOR</li>/
            <li>CURVED ROOFING</li>/<li>GI DECKING SHEET</li>
          </ul>
          <div className="photo">
            <img src={p1} className="p"></img>
            <img src={p2} className="p"></img>
            <img src={p3} className="p"></img>
            <img src={p4} className="p"></img>
            <img src={p5} className="p"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pro;
