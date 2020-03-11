import React from "react";
import Navbar from "../components/Navbar";
import STX from '../assets/STX.jpg';
import STT from '../assets/STT.jpg';
import STJ from '../assets/STJ.jpg';
import Footer from "../components/Footer"
import "./Order.css";

const Order = () => {
  return (
    <div>
      <Navbar />
     

      <div className="Lovely container mt-3">
        <div className="row">
          <div className="col">
            <div className="card" style={{width: "18rem",  padding: "10px"}}>
              <img src={STX} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">St. Croix</h5>
                <p className="card-text">Order from any local restaraunts near you choose your island and then enter your address in the boxes below.</p>
                <a href="..." className="btn btn-primary">Select</a>
              </div>
            </div>
          </div>
        
        
          <div className="col">
            <div className="card" style={{width: "18rem",  padding: "10px"}}>
              <img src={STT} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">St. Thomas</h5>
                <p className="card-text">Order from any local restaraunts near you choose your island and then enter your address in the boxes below.</p>
                <a href="..." className="btn btn-primary">Select</a>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card" style={{width: "18rem",  padding: "10px"}}>
              <img src={STJ} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">St. John</h5>
                <p className="card-text">Order from any local restaraunts near you choose your island and then enter your address in the boxes below.</p>
                <a href="..." className="btn btn-primary">Select</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="In input-group mb-3">
          <input type="text" className="form-control" placeholder="Food Selection(s)" />
        </div>

        <div className="turn input-group mb-3">
          <input type="text" className="form-control" placeholder="Address" />
        </div>

        <button type="button" className="BOY btn btn-primary">
          <h1>Confirm Order</h1>
        </button>
      </div>

      <Footer />
    </div>
    
    
      
    
  );
};

export default Order;
