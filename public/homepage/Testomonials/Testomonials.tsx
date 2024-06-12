// components/TestimonialsCarousel.js
'use client'
import React from 'react';
import Image from 'next/image';
import bg from '@/app/images/17.png';
// import cart from '@/app/images/Icon ionic-ios-cart.png';
import '@/app/homepage/Testomonials/Testomonials.module.css'; // Correct path to the CSS module
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded
const TestimonialsCarousel = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">Testimonials</h2>
      <h3 className="text-center display-4">Furry Friends’ Raves</h3>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </p>
                <p>- John Treve -</p>
                <p >★★★★★</p>
              </div>
              <div className="col-md-6">
                <Image src={bg.src}  alt="Testimonial Image" width={500} height={500} className="d-block w-100" />
              </div>
            </div>
          </div>
          {/* Add more carousel-item divs as needed */}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
