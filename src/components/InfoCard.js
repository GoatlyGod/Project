import React from "react";
import { Link } from "react-router-dom";

const InfoCard = props => {
  return (
    <React.Fragment>
            <div className="card mr-5 mt-5">
              <img
                src= {props.image}
                className="card-img-top"
                alt="..."
                style={{ width: "90%", margin: "15px", borderRadius: "15px" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>{props.name}</b>
                </h5>
                <h6 className="price">{props.price}</h6>
                <p className="card-text">
                  
                </p>

                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalScrollable"
                >
                  Add to cart
                </button>

                <div
                  class="modal fade"
                  id="exampleModalScrollable"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalScrollableTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-scrollable"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          class="modal-title"
                          id="exampleModalScrollableTitle"
                        >
                          Saltfish&Dumplings
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <img
                          src="https://i.ytimg.com/vi/av0PNCWD0EQ/maxresdefault.jpg"
                          className="card-img-top"
                          alt="..."
                          style={{
                            width: "90%",
                            margin: "15px",
                            borderRadius: "15px"
                          }}
                        />
                      </div>
                      <div class="modal-footer">
                      <Link to="/Order">
                        <button type="button" class="btn btn-primary">
                          Add to cart- $11.35
                        </button>
                        </Link>
                      </div>
              </div>
            </div>
          </div>
          {/* thi is the end of card1 */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default InfoCard;
