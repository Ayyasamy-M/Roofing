import React from "react";
import Pic from "../logo/industry.jpg";

function Navbar() {
  return (
    <>
      <div className="nav_box">
        <div className="nav-logo">
          <img src={Pic} width={200} height={80} id="pic"></img>
        </div>
        <div className="nav-menu">
          <ul className="head_lists">
            <li>Home</li>
            <li>About Us</li>
            <li id="drop">
              Product
              <ul>
                <li>Roofing</li>
                <li>Tiles</li>
                <li>Consulting</li>
                <li>PatchWork</li>
                <li>Repainting</li>
                <li>Furbhish</li>
              </ul>
            </li>
            <li>Color Range</li>
            <li>Specification</li>
            <li>Clients</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
