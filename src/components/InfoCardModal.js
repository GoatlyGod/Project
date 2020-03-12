import React from "react";
import { Link } from "react-router-dom";

const InfoCardModal = props => {
  return (
    <div>
      <div
        className="modal fade"
        id={`exampleModalScrollable${props.id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalScrollableTitle">
                {props.name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                src={props.image}
                className="card-img-top"
                alt="..."
                style={{
                  width: "90%",
                  margin: "15px",
                  borderRadius: "15px"
                }}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                <Link to="/order">Add to cart - {props.price} </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* thi is the end of card1 */}
    </div>
  );
};

export default InfoCardModal;
