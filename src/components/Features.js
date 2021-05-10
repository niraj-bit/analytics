import React from 'react'
import "./Features.css"

export const Features = () => {
    return (
        <div>
            {/* <div class="card text-center">
  <div class="card-header">
    <h4><strong>Main Features</strong></h4>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

  </div>

</div> */}
<div class="container" >

<h3 class="text-center"><strong>Main Features</strong></h3>
<p class="text-center">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            

<div class="row">
          <div class="col-lg-4">
            <img src="/images/time.jpg" alt="Generic placeholder image" class="mx-auto d-block"/>
            <h4 class="text-center">Monitoring 24/7</h4>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor </p>
            </div>
          <div class="col-lg-4">
            <img src="/images/pc.jpg" alt="Generic placeholder image" class="mx-auto d-block"/>
            <h4 class="text-center">Widget System</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio .</p>
            </div>
          <div class="col-lg-4">
            <img  src="/images/rocket.jpg" alt="Generic placeholder image" class="mx-auto d-block"/>
            <h4 class="text-center">Best Performance</h4>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum.</p>
            </div>
        </div>

        </div>
        </div>
       
    )
}
