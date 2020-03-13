import React, { useState } from 'react';
import STX from '../assets/STX.jpg';
import STT from '../assets/STT.jpg';
import STJ from '../assets/STJ.jpg';
import InfoCard from '../components/InfoCard';

import './Home.css';

const Home = () => {
  const [foods] = useState([
    {
      name: 'Saltfish&Dumplings',
      price: '$11.00',
      image: 'https://i.ytimg.com/vi/av0PNCWD0EQ/maxresdefault.jpg'
    },
    {
      name: 'Johnny Cake',
      price: '$2.00',
      image:
        'https://www.uncommoncaribbean.com/wp-content/uploads/2011/07/caribbean-johnny-cake-recipe.jpeg'
    },
    {
      name: 'Banana Fritters',
      price: '$1.00 for 4',
      image:
        'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/17/87/75/MCmXydHzREeVpUel7L8w-IMG_5181.JPG'
    },
    {
      name: 'Kallaloo',
      price: '$12.00',
      image:
        'https://img2.10bestmedia.com/Images/Photos/300888/p-KALLALOO_55_660x440.jpg'
    },
    {
      name: 'Goat Water',
      price: '$8.00',
      image:
        'https://uncommoncarib-wpengine.netdna-ssl.com/wp-content/uploads/2014/05/Goat-Water-Taste-of-the-Caribbean-2048x1367.jpg;'
    },
    {
      name: 'Saltfishcakes',
      price: '$2.00',
      image:
        'https://sincerelymayra.com/wp-content/uploads/2016/10/bacalaito-SM.jpg'
    },
    {
      name: 'Stuffing',
      price: '$0.75 per scoop',
      image:
        'https://i.pinimg.com/originals/17/c3/90/17c3905169ac94bfcc57da88024d412b.jpg'
    },
    {
      name: 'Salmon Balls',
      price: '$4.00',
      image:
        'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/23707_384885498502_3776900_n.jpg?_nc_cat=102&_nc_sid=a61e81&_nc_ohc=bStGj9JKOTcAX9-xw28&_nc_ht=scontent-mia3-2.xx&oh=621ffff0c1f8186c4378d8ffd94bed93&oe=5E963351'
    },
    {
      name: 'Sous&Potato Salad',
      price: '$15.00',
      image:
        'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-0/p160x160/69790680_2720711057963044_1365460838877495296_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=piklmrOFW6sAX8eQr11&_nc_ht=scontent-mia3-2.xx&_nc_tp=6&oh=3279166c1634d8618dac5c910c85391f&oe=5E9961D2'
    }
  ]);

  return (
    <React.Fragment>
      <div
        id="carouselExampleControls"
        className="Pop carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={STX} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>St. Croix</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={STT} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={STJ} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>St. John</h1>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container">
        <div className="box">
          {foods.map((food, index) => {
            return (
              <InfoCard
                key={index}
                id={index}
                name={food.name}
                price={food.price}
                image={food.image}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
