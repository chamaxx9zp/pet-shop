
import React from 'react';
import image from '@/app/images/8.png';
import image1 from '@/app/images/9.png';
import image2 from '@/app/images/10.png';
import image3 from '@/app/images/11.png';
// import './Shop.css'; // Make sure to create this CSS file
const Shop = () => {
  return (
    <div className="shop-container">
      <h1 className="text-center mt-4">Furry Friends Emporium</h1>
      <div className="row mt-4">
        <div className="col">
          <img className="img-fluid" src={image.src} alt="Dog Food 1" />
          <div className="product-name">Dogs Foods</div>
          <div className="product-price">$200</div>
        </div>
        <div className="col">
          <img className="img-fluid" src={image1.src} alt="Dog Food 2" />
          <div className="product-name">Dogs Foods</div>
          <div className="product-price">$150</div>
        </div>
        <div className="col">
          <img className="img-fluid" src={image2.src} alt="Dog Food 3" />
          <div className="product-name">Shampoo</div>
          <div className="product-price">$300</div>
        </div>
        <div className="col">
          <img className="img-fluid" src={image3.src} alt="Dog Food 3" />
          <div className="product-name">Vitamins</div>
          <div className="product-price">$200</div>
        </div>
      </div>
      <div className="shop-more text-center mt-4">
        <button className="btnbtnsuccess">Shop More</button>
      </div>
    </div>
  );
};

export default Shop;
