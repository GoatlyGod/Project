import React from "react";
import Navbar from "../components/Navbar";
import STX from '../assets/STX.jpg';
import STT from '../assets/STT.jpg';
import STJ from '../assets/STJ.jpg'
import InfoCard from "../components/InfoCard";

import "./Home.css"


const Home = () => {
  return (
      <React.Fragment>
        <Navbar />
        <div id="carouselExampleControls" className="Pop carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={STX} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={STT} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={STJ} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>

       <InfoCard />
      </React.Fragment>
  );
};

export default Home;
