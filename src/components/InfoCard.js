import React from "react";
import InfoCardModal from "./InfoCardModal";

const InfoCard = props => {
  return (
    <React.Fragment>
      <div className="card mr-5 mt-5">
        <img
          src={props.image}
          className="card-img-top"
          alt="..."
          style={{ width: "90%", margin: "15px", borderRadius: "15px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            <b>{props.name}</b>
          </h5>
          <h6 className="price">{props.price}</h6>
          <p className="card-text"></p>

          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target={`#exampleModalScrollable${props.id}`}
          >
            Add to cart
          </button>
          <InfoCardModal
            id={props.id}
            name={props.name}
            image={props.image}
            price={props.price}
          />

          {/* thi is the end of card1 */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default InfoCard;
