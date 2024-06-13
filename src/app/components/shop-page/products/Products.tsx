"use client"
import React from 'react'
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product1 from "../../../../../public/shop/8.png"
import Product2 from "../../../../../public/shop/9.png"
import Product3 from "../../../../../public/shop/10.png"
import Product4 from "../../../../../public/shop/11.png"
import cart_icon from "../../../../../public/shop/cart.svg"
import style from "./Products.module.scss"
import ButtonHoverBrown from '../../common/buttons/ButtonHoverBrown/ButtonHoverBrown';

function Products() {
  return (
    <>
      <Container className="py-5">
        <Row md={4} className='justify-content-center'>
          <Col className={style["col-center"]}>
            <Image src={Product1} alt="product1" className='mt-4'/>
            <Row className={`justify-content-center mx-md-3 mt-3 ${style['mob-margin-desc']}`}>
              <Col >
              <div className="flex-column text-start">
                <h6>Dog Foods</h6>
                <div className='text-success'>$ 300</div>
              </div>
              </Col>
              <Col className='text-end'><Image src={cart_icon} alt='cart-icon'/></Col>
            </Row>
          </Col>
          <Col className={style["col-center"]}>
            <Image src={Product2} alt="product2" className='mt-4'/>
            <Row className={`justify-content-center mx-md-3 mt-3 ${style['mob-margin-desc']}`}>
              <Col >
              <div className="flex-column text-start">
                <h6>Dog Foods</h6>
                <div className='text-success'>$ 300</div>
              </div>
              </Col>
              <Col className='text-end'><Image src={cart_icon} alt='cart-icon'/></Col>
            </Row>
          </Col>
          <Col className={style["col-center"]}>
            <Image src={Product3} alt="product3" className='mt-4'/>
            <Row className={`justify-content-center mx-md-3 mt-3 ${style['mob-margin-desc']}`}>
              <Col >
              <div className="flex-column text-start">
                <h6>Shampoo</h6>
                <div className='text-success'>$ 300</div>
              </div>
              </Col>
              <Col className='text-end'><Image src={cart_icon} alt='cart-icon'/></Col>
            </Row>
          </Col>
          <Col className={style["col-center"]}>
            <Image src={Product4} alt="product4" className='mt-4'/>
            <Row className={`justify-content-center mx-md-3 mt-3 ${style['mob-margin-desc']}`}>
              <Col >
              <div className="flex-column text-start">
                <h6>Vitamin</h6>
                <div className='text-success'>$ 300</div>
              </div>
              </Col>
              <Col className='text-end'><Image src={cart_icon} alt='cart-icon'/></Col>
            </Row>
          </Col>

          <Col className={style["col-center"]}>
            <Image src={Product1} alt="product1" className='mt-4'/>
            <Row className={`justify-content-center mx-md-3 mt-3 ${style['mob-margin-desc']}`}>
              <Col >
              <div className="flex-column text-start">
                <h6>Dog Foods</h6>
                <div className='text-success'>$ 300</div>
              </div>
              </Col>
              <Col className='text-end'><Image src={cart_icon} alt='cart-icon'/></Col>
            </Row>
          </Col>
          <Col className={style["col-center"]}>
            <Image src={Product2} alt="product2" className='mt-4'/>
            <Row className={`justify-content-center mx-md-3 mt-3 ${style['mob-margin-desc']}`}>
              <Col >
              <div className="flex-column text-start">
                <h6>Dog Foods</h6>
                <div className='text-success'>$ 300</div>
              </div>
              </Col>
              <Col className='text-end'><Image src={cart_icon} alt='cart-icon'/></Col>
            </Row>
          </Col>
          <Col className={style["col-center"]}>
            <Image src={Product3} alt="product3" className='mt-4'/>
            <Row className={`justify-content-center mx-md-3 mt-3 ${style['mob-margin-desc']}`}>
              <Col >
              <div className="flex-column text-start">
                <h6>Shampoo</h6>
                <div className='text-success'>$ 300</div>
              </div>
              </Col>
              <Col className='text-end'><Image src={cart_icon} alt='cart-icon'/></Col>
            </Row>
          </Col>
          <Col className={style["col-center"]}>
            <Image src={Product4} alt="product4" className='mt-4'/>
            <Row className={`justify-content-center mx-md-3 mt-3 ${style['mob-margin-desc']}`}>
              <Col >
              <div className="flex-column text-start">
                <h6>Vitamin</h6>
                <div className='text-success'>$ 300</div>
              </div>
              </Col>
              <Col className='text-end'><Image src={cart_icon} alt='cart-icon'/></Col>
            </Row>
          </Col>
        </Row>
        <div className="text-center mt-5">
            <ButtonHoverBrown text='Load More'/>
        </div>
      </Container>
    </>
  );
}

export default Products