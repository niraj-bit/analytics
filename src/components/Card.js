import React from 'react'
import "./Card.css"

export const Card = () => {
    return (
        <div>

{/* <hr class="featurette-divider"/> */}
<div class="container">
<div class="card">

        <div class="row featurette">
          <div class="col-md-7">
            <h2  >Automated Reports <br/> & Widget Alerts</h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="/images/sc1.jpg" alt="Generic placeholder image"/>
          </div>
        </div>

        {/* <hr class="featurette-divider"/> */}

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2>Oh yeah, it's that good.</h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" src="/images/sc2.jpg" alt="Generic placeholder image"/>
          </div>
        </div>
        

        {/* <hr class="featurette-divider"/> */}

        <div class="row featurette">
          <div class="col-md-7">
            <h2 >And lastly, this one.</h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="/images/sc3.jpg" alt="Generic placeholder image"/>
          </div>
        </div>
  </div>
  </div>
        </div>
    )
}
