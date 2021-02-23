import React from 'react';

const Navbar = () => {
    return (
        <div style={{borderBottom:'1px solid lightgray'}}>
        <nav class="navbar navbar-expand-lg navbar-light container">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><h1 style={{color:'#1dbf73'}}>AirCnc</h1></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Host Your Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Host Your Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Help</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Log in</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><button className="btn btn-success">Sign up</button></a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Navbar;