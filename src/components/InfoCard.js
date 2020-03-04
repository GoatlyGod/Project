import React from 'react'
import heartOutline from "../assets/heart-outline.svg";



const InfoCard = () => {
    return (
        <div className="container mt-3">
            <div className="row">
            <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src="" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Dish Name</h5>
                    <div className="card-text">
                    <p></p>
                    <p></p> 
                    </div>
                    <a href="#" className="btn btn-primary">
                    Learn More
                    </a>
    
                    <button type="button" class="btn btn-outline-warning">
                    <img src={heartOutline} alt="favorites"></img>
                    </button>
                </div>
                </div>
            </div>
            </div>
      </div>
    )
}

export default InfoCard