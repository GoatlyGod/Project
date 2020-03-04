import React from 'react';
import InfoCard from './components/InfoCard'


const App = () => {
  return (
    <div className="box2 container">
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
  )
}

export default App;
