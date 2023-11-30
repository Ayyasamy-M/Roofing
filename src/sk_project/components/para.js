import React from "react";
import structure from "../images/structure.png";

function Search() {
  return (
    <>
      <div className="search">VIEW ALL SERVICES</div>
      <h2 className="para_1">
        <span className="sk_para">Sk Indusries </span>
        7.3 billion of the global market in 2023 pertained to asphalt shingles,
        the most widely used roofing material globally.
      </h2>
      <div className="pic_text">
        <img src={structure} className="struct"></img>
        <div className="choose">
          <h1>Why Choose Us?</h1>
          <h3>
            <li>
              Asphalt shingles. “The most common residential roofing material
              used in the United States, asphalt shingles are popular because
              they are economical and easy to install,” states HGTV.
            </li>
            <li>
              Ceramic roofing tiles."Tiles are slowly becoming the most popular
              choice for floors and walls thanks to their longevity and ease of
              maintenance."
            </li>
            <li> Wood shakes and cedar shingles.</li>
            <li>
              Metal roofing.Galvalume, aluminum, zinc, copper, and stainless
              steel are all great solutions for metal roofing needs.{" "}
            </li>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Search;
