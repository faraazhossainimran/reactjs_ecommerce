import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light m-0 auto">
        <div class="container">
          <a class="navbar-brand fs-4 fw-bold" href="#">
            Ezintle
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contract
                </a>
              </li>
            </ul>
            <div className="buttons">
              <button type="button" class="btn btn-outline-dark">
                Login
              </button>{' '}
              <button type="button" class="btn btn-outline-dark">
                Register
                
              </button>{' '}
              <button type="button" class="btn btn-outline-dark">
                Cart(0)
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
