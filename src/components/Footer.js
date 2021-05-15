import React from 'react'
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


export const Footer = () => {
  var sectionStyle = {
    width: "100%",
     height: "915px",
     backgroundImage: `url(../images/bottom.jpg)`,
     backgroundSize: "cover",
     overflow: "hidden",
   };
    return (
      <div>
      <div style={sectionStyle}> 
      <div class="container"
      >
      <div class="para">
      
      <h3 class="text-center"><strong>Pricing plans</strong></h3>
<p class="text-center">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="/images/topu.jpg" class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/t2.jpg" class="card-img-middle" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/images/topu.jpg" class="card-img-top" alt="..."/>
    </div>
  </div>

</div>

{/* footer nav */}

<div class="bot3">

<nav class="navbar navbar-expand-lg">
            <div class="container-fluid" alt="">
              <a class="navbar-brand" href="#">
                <img
                  class="logo"
                  src="/images/log.svg"
                  alt=""
                  width="30"
                  height="24"
                  class="d-inline-block align-text-top"
                />
                ANALYTICS
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Products
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      FAQ
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
                <div class="navbar-nav ml-auto action-buttons">
                  <div class="Login">
                    <a href="#" class="nav-link mr-4">
                    <FacebookIcon/>
                    </a>
                  </div>
                  <div class="Login">
                    <a href="#" class="nav-link mr-4">
                    <InstagramIcon/>
                    </a>
                  </div>
                  <div class="Login">
                    <a href="#" class="nav-link mr-4">
                    <TwitterIcon />
                    </a>
                  </div>
                  
                </div>
                </div>
                </div>
                </nav>
                </div>

</div>
</div>
      </div>
    )
}
