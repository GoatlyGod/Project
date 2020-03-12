import React, { useState } from "react";
import Navbar from "../components/Navbar";
import STX from "../assets/STX.jpg";
import STT from "../assets/STT.jpg";
import STJ from "../assets/STJ.jpg";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";

import "./Home.css";

const Home = () => {
  const [foods, setfoods] = useState([
    {   "name": "Saltfish&Dumplings",
        "price": "$13.75"},
    { "name": "Johnny Cake",
      "price": "$2.00"},
    { "name": "Banana Fritters" },
    { 'name': "Kallaloo" },
    { 'name': "Goat Soap" },
    { 'name': "Saltfishcakes" },
    { 'name': "Stuffing" },
    { 'name': "Salmon Balls" },
    { 'name': "Sous&Potato Salad" }
  ]);


  return (
    <React.Fragment>
      <Navbar />
      <div
        id="carouselExampleControls"
        className="Pop carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={STX} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>St. Croix</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={STT} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={STJ} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>St. John</h1>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container">
      <div className="box">
            {foods.map((food,index) => {
                return (
                    <InfoCard key={index} name={food.name} price={food.price}/>
                )
            })}
      </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
