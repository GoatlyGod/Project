import React, { useState } from "react";

import "./Login.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const history = useHistory();

  const formOnSubmitHandler = event => {
    event.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: inputEmail,
        password: inputPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          history.push("/home");
        } else if (data.error) {
          alert(data.error);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <React.Fragment>
      <Navbar />
      <form onSubmit={formOnSubmitHandler}>
        <div className="loginme">
          <h3>Please Login into your account</h3>

          <div className="form-group">
            Email
            <input
              type="text"
              className="form-control"
              placeholder="underrated@email.com"
              value={inputEmail}
              name={inputEmail}
              onChange={e => setInputEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            Password
            <input
              type="password"
              className="form-control"
              placeholder="Your Password *"
              value={inputPassword}
              name={inputPassword}
              onChange={e => setInputPassword(e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btnSubmit"
              value="Login"
            >
              Login
            </button>
          </div>

          <div className="form-group">
            <a href="..." className="btnForgetPwd">
              Forget Password?
            </a>
          </div>
        </div>
      </form>

      <Footer />
    </React.Fragment>  
  
      
  
  );
};

export default Login;
