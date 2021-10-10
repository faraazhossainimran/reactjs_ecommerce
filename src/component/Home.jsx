import React from 'react';

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-secondary border-0">
        <img
          src="/assets/bg.jpg"
          class="card-img"
          alt="background-img"
          height="700px"
        />
        <div class="card-img-overlay justify-content-center flex-column d-flex">
          <div class="container">
            <h5 class="card-title display-3 fw-bolder ">New Seasons Arivals</h5>
            <p class="card-text">
              Checkout All the Trends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
