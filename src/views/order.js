import React from "react";
import Navbar from "../components/Navbar";
import STX from '../assets/STX.jpg';
import STT from '../assets/STT.jpg';
import STJ from '../assets/STJ.jpg'
import "./Order.css";
import Address from "../components/AddressButton";
import buttonMe from "../components/OrderNow";

const Order = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Address/>
      <buttonMe/>

<<<<<<< HEAD
=======
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div class="card" style={{width: "18rem",  padding: "10px"}}>
              <img src={STX} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">St. Croix</h5>
                <p class="card-text">Order from any local restaraunts near you choose your island and then enter your address in the boxes below.</p>
                <a href="#" class="btn btn-primary">Select</a>
              </div>
            </div>
          </div>
        
        
          <div className="col">
            <div class="card" style={{width: "18rem",  padding: "10px"}}>
              <img src={STT} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">St. Thomas</h5>
                <p class="card-text">Order from any local restaraunts near you choose your island and then enter your address in the boxes below.</p>
                <a href="#" class="btn btn-primary">Select</a>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div class="card" style={{width: "18rem",  padding: "10px"}}>
              <img src={STJ} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">St. John</h5>
                <p class="card-text">Order from any local restaraunts near you choose your island and then enter your address in the boxes below.</p>
                <a href="#" class="btn btn-primary">Select</a>
              </div>
            </div>
          </div>
        </div>
      </div>
>>>>>>> 24b8393716fd70787532d51e24a0402f0ffdee9a
    </div>
  
  );
};

export default Order;
