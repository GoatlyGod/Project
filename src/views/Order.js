import React, { useState, useContext } from 'react';

import IslandOption from '../components/IslandOption';
import { StateContext } from '../store';
import "./Order.css";

const Order = () => {
  const [islands] = useState([
    {
      name: 'St. Croix',
      time: 'Food arrival in 15 mins after order',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhjp3LoLmCjJsmlhg6U2xIvETjq9LU8V6lGNJ_BJp3qQ3ZvJSE'
    },
    {
      name: 'St. Thomas',
      time: 'Food arrival in 15-20 mins after order',
      image: 'https://s3.amazonaws.com/chtvl/Megans_Beach.jpg'
    },
    {
      name: 'St. John',
      time: 'Food arrival in 30-40 mins after order',
      image:
        'https://www.tropicalpropertiesvi.com/wp-content/uploads/2019/02/real-estate-land.jpg'
    }
  ]);
  const [state] = useContext(StateContext);

  return (
    <div>
      <div className="Lovely container mt-3">
        <div className="row">
          <div className="col">
            {islands.map((island, index) => {
              return (
                <IslandOption
                  key={index}
                  name={island.name}
                  time={island.time}
                  image={island.image}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="In input-group mb-3">
          <input
            type="text"
            value={
              state.selectedFood.length
                ? (() => {
                    let res = '';

                    state.selectedFood.forEach((val, idx) => {
                      if (idx) res = `${res},`;
                      res = `${res} ${val.name} - ${val.price}`;
                    });

                    return res;
                  })()
                : ''
            }
            className="form-control"
            placeholder="Food Selection(s)"
            readOnly
          />
        </div>

        <div className="turn input-group mb-3">
          <input type="text" className="form-control" placeholder="Address" />
        </div>

        <button type="button" className="BOY btn btn-primary">
          <h1>Confirm Order</h1>
        </button>
      </div>
    </div>
  );
};

export default Order;
