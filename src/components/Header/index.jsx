import React from "react";
import "./style.css";
import Pfp from "../../assets/image/PFP.jpg";
import App from "../../App";

export default function Header() {
  return (
    <header className="masthead" data-aos="fade-up">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-6 ">
            <p className="t-shadow welcome">Welcome to the</p>
            <h1 className="t-shadow tittle">DoodlePounds</h1>
            <p className="lead display-7 desc">
              DoodlePound is a collection of 999 uniquely generated doge roaming
              around on the Solana blockchain.
            </p>
            <App />
          </div>
          <div className="col-md-6 text-center ">
            <img src={Pfp} alt="" className="img img-fluid" />
          </div>
        </div>
      </div>
    </header>
  );
}
