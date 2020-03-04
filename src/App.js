import React from 'react';
import "../src/App.css";
import InfoCard from './components/InfoCard';
import Navbar from './components/Navbar'


const App = () => {
  return (
    <React.Fragment>
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <form className="form-inline">
          <button
            type="button active"
            className="btn btn-outline-dark text-light"
          >
            <i className="fa fa-facebook"></i>
          </button>
          <button
            type="button active"
            className="btn btn-outline-dark text-secondary"
          >
            <i className="fa fa-twitter"></i>
          </button>
          <button
            type="button active"
            className="btn btn-outline-dark text-secondary"
          >
            <i className="fa fa-instagram"></i>
          </button>
          <button
            type="button active"
            className="btn btn-outline-dark text-secondary"
          >
            <i className="fa fa-youtube"></i>
          </button>
        </form>

        <b className="navbar-brand" href="#">
          STARWARS
        </b>

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
              Favorites
            </button>
          </div>
        </div>
      </nav>
    </div>   
      <div className="Card box2 container">
          <div className="row">
            <div className="box1 d-flex flex-col flex-nowrap">
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
            </div>
          </div>
      </div>
      </React.Fragment>
  );
}

export default App;
