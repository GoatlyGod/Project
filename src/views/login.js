import React, { useState } from "react";

import "./Login.css";

import Navbar from "../components/Navbar";
import { BrowserRouter, Link } from "react-router-dom";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("")
  return (
    <div>
      <Navbar />

      <div className="loginme">
        <h3>Please Login into your account</h3>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email *"
            value={inputEmail}
            name={inputEmail}
            onChange={e => setInputEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Your Password *"
            value={inputPassword}
            name={inputPassword}
            onChange={e => setInputPassword(e.target.value)}
          ></input>
        </div>

            <BrowserRouter>
            <Link to="/home">
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-primary btnSubmit"
                        value="Login"
                    ></input>
                </div>
            </Link>
            </BrowserRouter>


        

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
