import React from 'react';
import image from '@/app/images/17.png'
import image1 from '@/app/images/18.png'
import image2 from '@/app/images/19.png'
import image3 from '@/app/images/20.png'
import image4 from '@/app/images/21.png'
import image5 from '@/app/images/22.png'
import 'bootstrap/dist/css/bootstrap.min.css';
const Gallery = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-md-4 mb-lg-4 mb-4 mt-5 text-center">
            <h2>@pet_shop</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a minima quod explicabo id ratione animi, beatae nam eos inventore.</p>
            <div className="mt-4 d-flex justify-content-center">
              <div className="item">
                <img className="img-fluid" src={image.src} alt="Gallery Item 1" />
              </div>
              <div className="item">
              <img className="img-fluid" src={image1.src} alt="Gallery Item 2" />
              </div>
              <div className="item">
              <img className="img-fluid" src={image2.src} alt="Gallery Item 3" />
              </div>
              <div className="item">
              <img className="img-fluid" src={image3.src} alt="Gallery Item 4" />
              </div>
              <div className="item">
              <img className="img-fluid" src={image4.src} alt="Gallery Item 5" />
              </div>
              <div className="item">
              <img className="img-fluid" src={image5.src} alt="Gallery Item 6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
