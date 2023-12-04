import React from "react";
import mahi from "../images/mahinndra.jpg";
import suzu from "../images/suzuki.jpg";
import coro from "../images/coromandal.jpg";
import tata from "../images/tata-logo.jpg";
function Partners() {
  return (
    <>
      <div id="par">
        <div id="part">
          <h1>
            Our <br></br>Awesome Clients
          </h1>
          <img src={mahi}></img>
          <img src={suzu}></img>
          <img src={coro}></img>
          <img src={tata}></img>
        </div>
      </div>
    </>
  );
}

export default Partners;
