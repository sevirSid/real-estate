import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./service.css";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { MdOutlineHouse } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
function Service() {
  const handleLearnMore = () => {
    console.warn("handleLearnMore");
  };
  return (
    <Row >
        <h1
            class="heading"
            style={{ textAlign: "center", padding: "2rem", fontSize: "4rem" }}
          >
            {" "}
            our <span>services</span>{" "}
          </h1>
      <Col>
        <section class="services" id="services">
          
          <Card  className="mt-4" style={{   padding: '2rem',  margin: 'auto',    minWidth: "20rem", maxWidth: "20rem" }}>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>
                <MdOutlineRealEstateAgent size={70} color={"orange"} />
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontSize: "2rem" }}
              >
                Buying Home
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                className="button-size"
                variant="light"
                onClick={handleLearnMore}
              >
                Learn more
              </Button>
            </Card.Body>
          </Card>
        </section>
      </Col>
      <Col>
        <section class="services" id="services">
          
          <Card  className="mt-4" style={{   padding: '2rem', margin: 'auto',  minWidth: "20rem", maxWidth: "20rem" }}>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>
                <MdOutlineHouse size={70} color={"orange"} />
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontSize: "2rem" }}
              >
                Renting Home
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                className="button-size"
                variant="light"
                onClick={handleLearnMore}
              >
                Learn more
              </Button>
            </Card.Body>
          </Card>
        </section>
      </Col>
      <Col>
        <section class="services" id="services">
          
          <Card  className="mt-4" style={{  padding: '2rem', margin: 'auto',     minWidth: "20rem", maxWidth: "20rem" }}>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>
                <FaHandshake size={70} color={"orange"} />
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontSize: "2rem" }}
              >
                Selling Home
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                className="button-size"
                variant="light"
                onClick={handleLearnMore}
              >
                Learn more
              </Button>
            </Card.Body>
          </Card>
        </section>
      </Col>
    </Row>
  );
  return (
    <section class="services" id="services">
      <h1 class="heading">
        {" "}
        our <span>services</span>{" "}
      </h1>

      <div class="box-container">
        {/* <div class="box">
            <img src="images/s-1.png" alt="" />
            <h3>buying home</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem officiis?</p>
            <a href="#" class="btn">learn more</a>
        </div>

        <div class="box">
            <img src="images/s-2.png" alt="" />
            <h3>renting home</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem officiis?</p>
            <a href="#" class="btn">learn more</a>
        </div>

        <div class="box">
            <img src="images/s-3.png" alt="" />
            <h3>selling home</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem officiis?</p>
            <a href="#" class="btn">learn more</a>
        </div> */}
      </div>
    </section>
  );
}

export default Service;
