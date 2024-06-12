import React from 'react';

const Newsletter = () => {
  return (
    <div className="container-fluid bg-brown py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="text-white mb-4">Get In With Some Pet News</h2>
          <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email Address"
              aria-label="Enter Your Email Address"
              aria-describedby="subscribe-btn"
            />
            <button className="btn btn-primary" type="button" id="subscribe-btn">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
