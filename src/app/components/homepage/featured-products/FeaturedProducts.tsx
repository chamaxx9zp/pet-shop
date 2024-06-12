import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import styles from './FeaturedProducts.module.scss'
import featured1 from "/public/homepage/featured-products/featured1.png"
import featured2 from "/public/homepage/featured-products/featured2.png"
import featured3 from "/public/homepage/featured-products/featured3.png"
import featured4 from "/public/homepage/featured-products/featured4.png"

function FeaturedProducts() {
  return (
    <>
    <Container>
    <Row className='my-5'>
          <Col md={3} className='text-center'>
            <div className={styles['image-container']}>
              <Image src={featured1} alt='dog_food'/>
              <p className={styles['featured-caption']}>Dogs Foods</p>
            </div>
            
          </Col>
          <Col md={3} className='text-center'>
            <div className={styles['image-container']}>
              <Image src={featured2} alt='cat_food'/>
              <p className={styles['featured-caption']}>Cats Foods</p>
            </div>
            
          </Col>
          <Col md={3} className='text-center'>
            <div className={styles['image-container']}>
              <Image src={featured3} alt='bird_food'/>
              <p className={styles['featured-caption']}>Birds Foods</p>
            </div>
            
          </Col>
          <Col md={3} className='text-center'>
            <div className={styles['image-container']}>
              <Image src={featured4} alt='fish_food'/>
              <p className={styles['featured-caption']}>Fish Foods</p>
            </div>
            
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default FeaturedProducts