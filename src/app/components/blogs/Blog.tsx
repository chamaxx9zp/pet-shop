import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Blog.module.scss";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import ButtonHoverBrown from "../common/buttons/ButtonHoverBrown/ButtonHoverBrown";
import blog1 from "/public/homepage/Blogs/blog1.png";
import blog2 from "../../../../public/homepage/Blogs/blog2.png";
import blog3 from "../../../../public/homepage/Blogs/blog3.png";

function Blog() {
  return (
    <div className={styles["background-color"]}>
      <Container className="py-5">
        <Row>
          <Col>
            <div className="text-center">
              <p className="">Blogs</p>
              <h1 className="">Furry Friends Forum</h1>
            </div>
          </Col>
        </Row>
        <Row className="py-2">
          <Col md={4}>
            <Card className="mt-5">
              <div className="imgcont">
                <Image
                  src={blog1}
                  alt="Blog-Image-1"
                  className="card-img-top"
                />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </Card.Text>
                <Card.Link href="#" className="link-none text-success">
                  Read More {">>"}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mt-5">
              <div className="imgcont">
                <Image
                  src={blog2}
                  alt="Blog-Image-2"
                  className="card-img-top"
                />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </Card.Text>
                <Card.Link href="#" className="link-none text-success">
                  Read More {">>"}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mt-5">
              <div className="imgcont">
                <Image
                  src={blog3}
                  alt="Blog-Image-3"
                  className="card-img-top"
                />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </Card.Text>
                <Card.Link href="#" className="link-none text-success">
                  Read More {">>"}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <ButtonHoverBrown text="More Blogs" />
        </div>
      </Container>
    </div>
  );
}

export default Blog;
