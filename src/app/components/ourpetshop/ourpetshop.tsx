import React from 'react';

const OurPetShop = () => {
  return (
    <div>
      <div className="container why-choose-us">
        <h2>Why Choose Our Pet Shop?</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="feature">
              <h3>Expertise</h3>
              <p>Our knowledgeable and friendly staff are here to assist you. From nutrition to grooming, we have the expertise to help you make informed decisions for your pet's care.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature">
              <h3>Quality Products</h3>
              <p>We carefully curate our selection of products, focusing on quality, durability, and pet safety. Whether it's premium pet food, stylish accessories, or innovative toys.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature">
              <h3>Community Involvement</h3>
              <p>We believe in giving back to the community. Our Pet Shop actively supports local animal shelters and initiatives aimed at improving the lives of pets in need.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature">
              <h3>Customer Satisfaction</h3>
              <p>Your satisfaction is our top priority. We are committed to providing excellent customer service, ensuring that you and your pet have a positive experience every time you visit.</p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            {/* Assuming you want to render an image here */}
            <img src="your-image-url-here" alt="Pet and Owner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPetShop;





    