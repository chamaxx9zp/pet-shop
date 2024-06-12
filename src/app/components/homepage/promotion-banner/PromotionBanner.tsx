import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./PromotionBanner.module.scss";
import ButtonHoverBrown from "../../common/buttons/ButtonHoverBrown/ButtonHoverBrown";
import BannerImage from "/public/homepage/promotion-banner/promotion_banner-web.png";

function PromotionBanner() {
  return (
    <>
      <Container fluid className="px-0">
        <Row>
          <Col>
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <Image
                  src={BannerImage}
                  alt="Banner-Image"
                  className="imgcont"
                />
                <Carousel.Caption className={styles["caption-container"]}>
                  <p className="">Buy 1 Get 1</p>
                  <h1 className={styles["banner-heading"]}>Save 50% Off</h1>
                  <p className="">Safe and effective products</p>
                  <h6 className="text-success">Shop for your pet</h6>
                  <div className="text-center">
                    <ButtonHoverBrown text="Shop Now" />
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PromotionBanner;
