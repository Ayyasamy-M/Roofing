import React from "react";
import Navbar from "./navbar";
import "../style/sk_style.css";
import "../style/mediaquery.css";
import Service from "./Service";
import Search from "./para";
import Pro from "./projects_sk";
import Footer from "./footer";
import Partners from "./partners";

function Web_site() {
  return (
    <React.Fragment>
      <Navbar />
      <Service />
      <Search />
      <Pro />
      <Partners />
      <Footer />
    </React.Fragment>
  );
}
export default Web_site;
