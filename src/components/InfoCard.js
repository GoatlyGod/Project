import React from 'react'
import { Link } from 'react-router-dom';



const InfoCard = () => {
    return (
        <React.Fragment> 
          <div className="container mt-3">
            <div className="row">
              <div className="col">  
                <div className="card" style={{ width: "18rem", margin: "20px" }}>
                  <img src="https://i.ytimg.com/vi/av0PNCWD0EQ/maxresdefault.jpg" className="card-img-top" alt="..." style={{width: "90%", margin: "15px",  borderRadius: "15px" }} />
                  <div className="card-body">
                    <h5 className="card-title"><b>Saltfish&Dumplings</b></h5>
                    <h6 className="price" >$11.35</h6>
                    <p className="card-text">3 sweet boiled dumplings and saltfish with island touch seasonings</p>
                    
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                      Add to cart
                    </button>

                    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-scrollable" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalScrollableTitle">Saltfish&Dumplings</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                          <img src="https://i.ytimg.com/vi/av0PNCWD0EQ/maxresdefault.jpg" className="card-img-top" alt="..." style={{width: "90%", margin: "15px",  borderRadius: "15px" }} />

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Add to cart- $11.35</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">  
                <div className="card" style={{ width: "18rem", margin: "20px" }}>
                  <img src="https://www.uncommoncaribbean.com/wp-content/uploads/2011/07/caribbean-johnny-cake-recipe.jpeg" className="card-img-top" alt="..." style={{height: "36%", width: "90%", margin: "15px",  borderRadius: "15px" }} />
                  <div className="card-body">
                    <h5 className="card-title">Johnny Cake</h5>
                    <p className="card-text">Sweet flat like shaped deep fried cake with a fluffy doughy inside with a delightful taste </p>
                    

                      <button className="button2 btn"><Link to="/Order">Order now!</Link></button>
                        
              
                  </div>
                </div>
            </div>
            <div className="col">  
                <div className="card" style={{ width: "18rem", margin: "20px" }}>
                  <img src="https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/17/87/75/MCmXydHzREeVpUel7L8w-IMG_5181.JPG" className="card-img-top" alt="..." style={{width: "90%", margin: "15px",  borderRadius: "15px" }} />
                  <div className="card-body">
                    <h5 className="card-title">Banana fritters</h5>
                    <p className="card-text">Banana pancake like batter fried in low oil. Much softer texture than pancakes which makes a delightful sweet.</p>
                    

                    <button className="button3 btn"><Link to="/Order">Order now!</Link></button>                        
              
                  </div>
                </div>
            </div>
            <div className="col">  
                <div className="card" style={{ width: "18rem", margin: "20px" }}>
                  <img src="https://img2.10bestmedia.com/Images/Photos/300888/p-KALLALOO_55_660x440.jpg" className="card-img-top" alt="..." style={{height: "36%", width: "90%", margin: "15px",  borderRadius: "15px" }} />
                  <div className="card-body">
                    <h5 className="card-title">Kallaloo</h5>
                    <p className="card-text">Boiled and seasoned spinach, chard, and okra soup
                     that can be made with seafood or sous(Pig meat)in it.</p>
                    

                      <button className="button4 btn"><Link to="/Order">Order now!</Link></button>                        
              
                  </div>
                </div>
            </div>
            <div className="col">  
                <div className="card" style={{ width: "18rem", margin: "20px" }}>
                  <img src="https://uncommoncarib-wpengine.netdna-ssl.com/wp-content/uploads/2014/05/Goat-Water-Taste-of-the-Caribbean-2048x1367.jpg;" className="card-img-top" alt="..." style={{height: "36%", width: "90%", margin: "15px",  borderRadius: "15px" }} />
                  <div className="card-body">
                    <h5 className="card-title">Goat water</h5>
                    <p className="card-text">A thin brown soup with parts of goat meat including some bones with cloves and thyme.</p>
                    

                    <button className="button5 btn"><Link to="/Order">Order now!</Link></button>                        
              
                  </div>
                </div>
            </div>
            <div className="col">  
                <div className="card" style={{ width: "18rem", margin: "20px" }}>
                  <img src="https://sincerelymayra.com/wp-content/uploads/2016/10/bacalaito-SM.jpg" className="card-img-top" alt="..." style={{width: "90%", margin: "15px",  borderRadius: "15px" }} />
                  <div className="card-body">
                    <h5 className="card-title">Saltfishcakes</h5>
                    <p className="card-text">Saltfish mixed in with a thick flour batter, bell pepers, and other spices that then gets fried.</p>
                    

                      <button className="button6 btn"><Link to="/Order">Order now!</Link></button>                        
              
                  </div>
                </div>
            </div>
            <div className="col">  
                <div className="card" style={{ width: "18rem", margin: "20px" }}>
                  <img src="https://i.pinimg.com/originals/17/c3/90/17c3905169ac94bfcc57da88024d412b.jpg" className="card-img-top" alt="..." style={{height: "36%", width: "90%", margin: "15px",  borderRadius: "15px" }} />
                  <div className="card-body">
                    <h5 className="card-title">Stuffing</h5>
                    <p className="card-text">Colored mashed potatos well seasoned with spices a dash of sugar and sometimes raisins are added.</p>
                    

                    <button className="button7 btn"><Link to="/Order">Order now!</Link></button>                        
              
                  </div>
                </div>
            </div>
            <div className="col">  
                <div className="card" style={{ width: "18rem", margin: "20px" }}>
                  <img src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/23707_384885498502_3776900_n.jpg?_nc_cat=102&_nc_sid=a61e81&_nc_ohc=bStGj9JKOTcAX9-xw28&_nc_ht=scontent-mia3-2.xx&oh=621ffff0c1f8186c4378d8ffd94bed93&oe=5E963351" alt="..." style={{height: "36%", width: "90%", margin: "15px",  borderRadius: "15px" }} />
                  <div className="card-body">
                    <h5 className="card-title">Salmon Balls</h5>
                    <p className="card-text">Spiced and seasoned salmon (with the salmon bones removed) balled into an oval like shape and fried.</p>
                    

                    <button className="button8 btn"><Link to="/Order">Order now!</Link></button>                        
              
                  </div>
                </div>
            </div>
            <div className="col">  
                <div className="card" style={{ width: "18rem", margin: "20px" }}>
                  <img src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-0/p160x160/69790680_2720711057963044_1365460838877495296_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=piklmrOFW6sAX8eQr11&_nc_ht=scontent-mia3-2.xx&_nc_tp=6&oh=3279166c1634d8618dac5c910c85391f&oe=5E9961D2" alt="..." style={{height: "36%", width: "90%", margin: "15px",  borderRadius: "15px" }} />
                  <div className="card-body">
                    <h5 className="card-title">Sous&Potato salad</h5>
                    <p className="card-text">Pig part chunks in a soup like sauce spiced heavily with a side of potato salad</p>
                    

                    <button className="button9 btn"><Link to="/Order">Order now!</Link></button>                        
              
                  </div>
                </div>
            </div>

            </div>
          </div>
        
      </React.Fragment>
    )
}

export default InfoCard;