import React from 'react';
import "../src/App.css";
import InfoCard from './components/InfoCard';
import Navbar from './components/Navbar'


const App = () => {
  return (
    <React.Fragment>
     <Navbar />
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
