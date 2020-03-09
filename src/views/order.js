import React from "react";
import Navbar from "../components/Navbar";
import "./Order.css";
import Address from "../components/AddressButton";
import buttonMe from "../components/OrderNow";

const Order = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Address/>
      <buttonMe/>

    </div>
  );
};

export default Order;
