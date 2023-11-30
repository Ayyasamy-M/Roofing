import React from "react";
import link from "../images/linked_in.jpg";
import whats from "../images/Whatsapp_logo.jpg";
import face from "../images/facebook.jpg";
import inst from "../images/insta_1.jpg";
function Footer() {
  return (
    <>
      <div className="footer">
        <div id="industry">
          <h1>Excellence in industry</h1>
          <p>
            <li>
              An average roof lasts 25-50 years, depending on the quality,
              durability, and type of roofing material.
            </li>{" "}
            <li>
              You typically get what you pay for, so keep in mind that the
              cheapest option will require replacement sooner.
            </li>{" "}
            <li>
              {" "}
              metal roofs cost much more than asphalt ones but last three times
              longer.
            </li>
            <li>
              Asphalt shingles are the most popular roofing material for
              homeowners today.
            </li>
          </p>
        </div>
        <div id="industry_1">
          {" "}
          <h1>Our Branches</h1>
          <p>1. 18/ThandumariAmman Koil Street,Kodampakkam,Chennai-600008</p>
          <p>
            2. Gate No:7/New LIC Building,Swis Bank opp,Otteri,Chennai-600012
          </p>
          <p>
            3. SengaduRoad,Papanaickanpalayam,Near Womens Polytechnic
            college,Coimbatore-635687
          </p>
          <p>
            4. Denver Street,Park Avenue Colony, opp to FoggMountain
            Showroom,Bangaluru-567895
          </p>
          <p>
            5. Daily Market,Pachamalai Road,Near New
            BusStand,Gobicettipalayam-653876
          </p>
          <div id="imgg">
            <img src={whats} className="imgs"></img>
            <img src={link} className="imgs"></img>
            <img src={face} className="imgs"></img>
            <img src={inst} className="imgs"></img>
          </div>
        </div>
        <div id="copyright">
          <p>
            © Copyright 2019. All Rights Reserved. Website developed by ____
            <span id="pk">S.K Technologies</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer;
