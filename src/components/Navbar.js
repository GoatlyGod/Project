import React from "react";
import VIFeed from "../assets/VIFeed.png";
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar-light bg-dark fixed-top">
          <form className="form-inline">
            <img className="nav-logo" src={VIFeed} alt="..."/>
          </form>

            <form class=" meform form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>

          <div class="d-flex">
            <div class="dropdown mr-1">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-offset="10,20"
              >
                Settings
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button class="dropdown-item" href="#"><Link to="/Login">Login</Link></button>
                <button class="dropdown-item" href="#"><Link to="/Home">Home</Link></button>
                <button class="dropdown-item" href="#"><Link to="/Order">Cart</Link></button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="Boy input-group">
        <input
          type="text"
          className="Search form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Navbar;
