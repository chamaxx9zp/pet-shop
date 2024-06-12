import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import footer_icon from '/public/footer/footer-icon.png'
import facebook_icon from '../../../../../public/footer/facebook.svg'
import instagram_icon from '../../../../../public/footer/instagram.svg'
import location_icon from '../../../../../public/footer/location.svg'
import phone_icon from '../../../../../public/footer/phone.svg'
import whatsapp_icon from '../../../../../public/footer/whatsapp.svg'
import youtube_icon from '../../../../../public/footer/youtube.svg'

function Footer() {
  return (
    <>
      <div className={styles["background-color"]}>
        <Container>
          <Row className={styles["row-padding"]}>
            <Col>
              <div className="text-center">
                <Image src={footer_icon} alt="footer-icon" />
                <p className="text-white">
                  Dur celle Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna.
                </p>
                <div className="d-flex"></div>
                <Row className="justify-content-center text-white mt-2">
                  <Col md="auto">
                    <span>
                      <Image src={whatsapp_icon} alt="whatsapp-icon" />
                    </span>
                  </Col>
                  <Col md="auto">
                    <span>
                      <Image src={facebook_icon} alt="facebook-icon" />
                    </span>
                  </Col>
                  <Col md="auto">
                    <span>
                      <Image src={instagram_icon} alt="instagram-icon" />
                    </span>
                  </Col>
                  <Col md="auto">
                    <span>
                      <Image src={youtube_icon} alt="youtube-icon" />
                    </span>
                  </Col>
                </Row>
                <Row className="justify-content-md-center text-white mt-4">
                  <Col md="auto">
                    <span>
                      <Image
                        src={location_icon}
                        alt="location-icon"
                        className='me-2'
                      />
                    </span>
                    Lorem ipsum dolor sit amet, consectetur
                  </Col>
                  <Col md="auto">
                    <span>
                      <Image
                        src={phone_icon}
                        alt="phone-icon"
                        className='me-2'
                      />
                    </span>
                    +123 456 7890
                  </Col>
                </Row>
               
                <Row className="justify-content-md-center text-white mt-5">
                  <Col md="auto">
                    <Link href="/" className="link-none text-white">
                      Home
                    </Link>
                  </Col>
                  <Col md="auto">
                    <Link href="/about-us" className="link-none text-white">
                      About US
                    </Link>
                  </Col>
                  <Col md="auto">
                    <Link href="/shop" className="link-none text-white">
                      Shop
                    </Link>
                  </Col>
                  <Col md="auto">
                    <Link href="/blog" className="link-none text-white">
                      Blogs
                    </Link>
                  </Col>
                  <Col md="auto">
                    <Link href="/faq" className="link-none text-white">
                      FAQs
                    </Link>
                  </Col>
                  <Col md="auto">
                    <Link href="/contact-us" className="link-none text-white">
                      Contact US
                    </Link>
                  </Col>
                  <Col md="auto">
                    <Link
                      href="/privacy-policy"
                      className="link-none text-white"
                    >
                      Privacy Policy
                    </Link>
                  </Col>
                  <Col md="auto">
                    <Link
                      href="/terms-and-conditions"
                      className="link-none text-white"
                    >
                      Terms & Conditions
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles["footer-line"]}>
        <Container className="text-white">
          <Row className="justify-content-md-center py-2">
            <Col md="auto">
              Copyright © 2023 Pet Shop (Pvt) Ltd. All Rights Reserved.
            </Col>
            <Col md={3}></Col>
            <Col md="auto">
              Designed & Developed By{" "}
              <span>
                <Link
                  href="https://www.archmage.lk/"
                  className={`${styles.archmage} link-none`}
                >
                  Archmage Solutions
                </Link>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer