import React from "react";

import "./Login.css";

import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />

      <div className="loginme">
       
          <h3 >Login Form 1</h3>
     
        

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email *"
            value=""
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Your Password *"
            value=""
          ></input>
        </div>

        <div className="form-group">
          <input type="submit" className="btn btn-primary btnSubmit" value="Login"></input>
        </div>

        <div className="form-group">
          <a href="#" className="btnForgetPwd">
            Forget Password?
          </a>
        </div>
      </div>
    </div>
  );
};


export default Login;
