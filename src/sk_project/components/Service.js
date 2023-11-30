import React from "react";
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import i4 from "../images/i4.jpg";
import i5 from "../images/i5.jpg";
import i6 from "../images/i6.jpg";

function Service() {
  return (
    <>
      <div id="background">
        <div className="b_image"> </div>
        <div id="text">
          <h3 className="text_head">We are fetching your dream House</h3>
          <br></br>Cost efficient and durable made with a base mat of wood
          fiber, cellulose, paper or some other material saturated with asphalt
          so it is waterproof.
        </div>
        <div className="pic_content">
          <h1>Our Services</h1>
          <p></p>
          <div className="image_box">
            <div className="i1">
              <img src={i1} width={370} height={240}></img>
              <div className="h3">
                <h3>Top and Under Cladding</h3>
              </div>
            </div>{" "}
            <div className="i1">
              <img src={i2} width={370} height={240}></img>
              <div>
                <h3>Zincoat Steel</h3>
              </div>
            </div>{" "}
            <div className="i1">
              <img src={i3} width={370} height={240}></img>
              <div>
                <h3>Copy Coated Sheet Coil</h3>
              </div>
            </div>{" "}
            <div className="i1">
              <img src={i4} width={370} height={240}></img>
              <div>
                <h3>Constructural Solution</h3>
              </div>
            </div>{" "}
            <div className="i1">
              <img src={i5} width={370} height={240}></img>
              <div>
                <h3>Smart Building Ideas</h3>
              </div>
            </div>
            <div className="i1">
              <img src={i6} width={370} height={240}></img>
              <div>
                <h3>Hit buildings Systems</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Service;
