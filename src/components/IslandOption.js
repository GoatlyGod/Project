import React from "react";




const IslandOption = props => {
    return (
        
        <div>
            <div className="Lovely container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card" style={{ height: "450px", width: "18rem", padding: "10px" }}>
                            <img src={props.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> {props.name} </h5>
                                <p className="card-text">
                                Order from any local restaraunts near you choose your island
                                and then enter your address in the boxes below.
                                </p>
                                <a href="#" className="btn btn-primary">
                                Select
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IslandOption;











