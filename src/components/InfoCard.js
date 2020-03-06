import React from 'react'
import heartOutline from "../assets/heart-outline.svg";



const InfoCard = () => {
    return (
        <React.Fragment> 
        <div className="card" style={{ width: "18rem" }}>
        <img src="https://i.ytimg.com/vi/av0PNCWD0EQ/maxresdefault.jpg" class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </React.Fragment>
    )
}

export default InfoCard;