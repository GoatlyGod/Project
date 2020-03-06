import React from 'react'
import VIFeed from "../assets/VIFeed.png"



const Navbar = () => {
    return (
        <React.Fragment>
        <div>
        <nav className="navbar navbar-light bg-light fixed-top">
          <form className="form-inline">
            <img className= "nav-logo" src={VIFeed}/>
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
                Favorites
              </button>
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
    )
}
export default Navbar;