import React from 'react'



const Navbar = () => {
    return (
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
    )
}


export default Navbar;