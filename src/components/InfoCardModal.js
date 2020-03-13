import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { StateContext } from '../store';

const InfoCardModal = props => {
  const history = useHistory();
  const [, dispatch] = useContext(StateContext);

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
                  width: '90%',
                  margin: '15px',
                  borderRadius: '15px'
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  dispatch({
                    type: 'SET_SELECTED_FOOD',
                    payload: {
                      name: props.name,
                      price: props.price,
                      image: props.image
                    }
                  });
                  history.push('/order');
                }}
              >
                Add to cart - {props.price}
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
