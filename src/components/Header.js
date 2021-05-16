import React from "react";
import "./Header.css";

export const Header = () => {
  var sectionStyle = {
    width: "100%",
    height: "815px",
    backgroundImage: `url(../images/top.jpg)`,
    backgroundSize: "cover",
    overflow: "hidden",
  };

  return (
    <div>
      {/* nav */}
      <div style={sectionStyle}>
        <div class="container">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid" alt="">
              <a class="navbar-brand" href="#">
                <img
                  class="logo"
                  src="/images/log.svg"
                  alt=""
                  width="40"
                  height="40"
                  class="d-inline-block align-text-top"
                />
                <div class="head">ANALYTICS</div>
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
                {/* login */}
                <div class="navbar-nav ml-auto action-buttons">
                  <div class="Login">
                    <a href="#" class="nav-link mr-4">
                      Login
                    </a>
                  </div>
                  <div class="nav-item">
                    <a href="#" class="btn btn-primary sign-up-btn">
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* login */}
          </nav>
        </div>
        {/* card */}
        <div class="container-fluid">
          <div class="row featurette">
            <div class="col-md-5 col-lg-5">
              <div class="load">
                <h1>
                  Monitor your business <br /> on your real business
                </h1>
                <p class="lead">
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </div>
            </div>
            <div class="col-md-7 col-lg-7 myBannerImg">
              <img
                class="featurette-image img-fluid ml-auto"
                src="/images/top2.png"
                alt="Generic placeholder image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
