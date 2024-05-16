// components/Home.js
import React from "react";
import "./index.css";
import Navbar from "../Navbar/Navbar.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid col-md-12 d-flex" id="mainDiv">
        {" "}
        <div className="Left-div col-md-8 text-center">
          <h1 className="welcomeLine mb-3 mt-5">
            Welcome to <span id="big-hospitalName">AyuShakti</span>
          </h1>

          <h1 className="mb-5">
            Where <span className="left-part-upper">Healing </span>Begins and{" "}
            <span className="left-part-upper">Hope</span> Prevails.{" "}
          </h1>

          <h1 className="mb-3 mt-5">
            Your <span className="left-part-below">Health</span> is Your{" "}
            <span className="left-part-below">Wealth</span>,
          </h1>

          <h1>
            At <span className="small-hospitalName">AyuShakti</span>, We Nurture
            Both.
          </h1>
        </div>
        <div className="col-md-4 container-fluid  background-image"></div>
      </div>
    </div>
  );
};

export default Home;
