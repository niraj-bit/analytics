import React from "react";
import "./Header.css";

export const Header = () => {

  var sectionStyle = {
    width: "100%",
    height: "915px",
    backgroundImage: `url(../images/background-top.jpeg)`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  };

  return (
    <div>
      {/* logo */}
       {/* <nav class="navbar navbar-light bg-light">
  <div class="container-fluid" class="logo">
    <a class="navbar-brand" href="#">
       <img src="/images/Subtract.png" alt=""/>
      ANALYTICS
    </a>
  
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
    </div> */}


      {/* <nav
        id="nav"
        class="navbar fixed-top navbar-toggleable-sm"
        data-spy="affix"
      >
        <div class="container">
          <a href="#" class="navbar-brand">
            Brand
          </a>
          <a
            class="navbar-toggler float-right hidden-md-up"
            data-toggle="collapse"
          ></a>
          <ul class="nav navbar-nav"></ul>
          <ul class="nav ml-auto navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <span class="badge badge-pill bg-inverse">2</span>
              </a>
            </li>
          </ul>
        </div>
      </nav> 
      {/* logo */}
     
{/* <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" class="logo">
  <a class="navbar-brand" href="#">
       <img src="/images/Subtract.png" alt=""/>
      ANALYTICS
    </a>
    </div>
    </nav>
    </div> */}

    {/* nav */}
    <div style={ sectionStyle }>
    <div class="container">
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid" alt="">
  <a class="navbar-brand" href="#">
      <img class="logo" src="/images/log.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      ANALYTICS
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
      </ul>
      {/* login */}
      <div class="navbar-nav ml-auto action-buttons">
			<div class="Login">
				<a href="#" class="nav-link mr-4">Login</a>
                
			</div>
			<div class="nav-item">
				<a href="#" class="btn btn-outline-primary sign-up-btn">Sign up</a>
            </div>
		
    </div>
  </div>
</div>

      {/* login */}
</nav>
</div></div>
     </div>
  );
};
