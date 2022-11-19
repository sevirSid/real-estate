import React from "react";
import "./Card.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FaMailBulk } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import CustomModal from "../modal/CustomModal";
function Card({announcement}) {
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick =() => {
    console.log(announcement);
  }
  return (
    // <Container></Container>
    <>
    
      <div
        bg-variant="light"
        class="text-center card-style justify-content-center"
        onClick={handleClick}
      >
        {/* <CustomModal header={"My modal header"} description={"My Woohoo, you're reading this text in a modal!"}/> */}
        <div class="parent-card-position-relative">
          <img
            src={announcement.image}
            alt="Girl in a jacket"
          />
          <div class="container-overlay">
            <Row>
              <Col>
                <span class="title-on-image">Exclusivité</span>
              </Col>
            </Row>
          </div>
          <div class="container-overlay-images">
            <Badge class="badge-nb-images" pill variant="light">
              <Row>
                <Col>
                  <FaCamera />
                </Col>
                <Col>
                  <span>{Math.floor(Math.random() * 10)}</span>
                </Col>
              </Row>
            </Badge>
          </div>
        </div>
        <Row className="pt-2 pb-2">
          <Row>
            <Col>
              <h6>
              {announcement.homeType} <b>5 Pieces {announcement.space} m2</b>
              </h6>
            </Col>
            <Col>
              <h6 class="text-danger">
                <b>{announcement.price} €</b>
              </h6>
            </Col>
          </Row>
          <Row class="pl-3 pr-3 pt-2 pb-2">
            <Col class="p-1">
              <Button
                class="mt-auto full-width"
                href="#"
                variant="outline-danger"
              >
                {/* <!-- <b-icon icon="heart heart-fill" font-scale="1"></b-icon> -->
                        <b-icon icon="heart" font-scale="1"></b-icon> */}

                <Row>
                  <Col>
                    <FaHeart />
                  </Col>
                  <Col>
                    <span>Favoris</span>
                  </Col>
                </Row>
              </Button>
            </Col>
            <Col class="p-1">
              <Button
                class="mt-auto full-width"
                href="#"
                variant="outline-primary"
              >
                {/* <b-icon icon="envelope" font-scale="1"></b-icon> */}

                <Row>
                  <Col>
                    <FaMailBulk />
                  </Col>
                  <Col>
                    <span>Message</span>
                  </Col>
                </Row>
              </Button>
            </Col>
          </Row>
        </Row>
      </div>
    </>
  );
}

export default Card;
