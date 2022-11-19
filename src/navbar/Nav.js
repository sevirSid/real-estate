import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { Col, Container, Row } from "react-bootstrap";
// import { Button, Container, Form, Navbar, NavDropdown } from 'react-bootstrap';
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  return (
    <nav class="navbar navbar-expand-lg bg-light" fixed="top">
      <div class="container-fluid">
        <a class="navbar-brand" href="!#">
          Coinzare
        </a>
        {/* <Link to="http://localhost:3000/">Coinzare</Link> */}
        {!isOpen ? (
          <button
            class="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        ) : (
          <button
            class="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span class="navbar-toggler-icon"></span> */}
            <FaWindowClose />
          </button>
        )}
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="!#">
                Home
              </a>
              {/* <Link to="http://localhost:3000/">Home</Link> */}
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="!#">
                Acheter
              </a>
              {/* <Link to="http://localhost:3000/">Home</Link> */}
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="!#">
                Louer
              </a>
              {/* <Link to="http://localhost:3000/">Home</Link> */}
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="!#">
                Vendre
              </a>
              {/* <Link to="http://localhost:3000/">Home</Link> */}
            </li>
          </ul>
          {/* <button class="btn btn-outline-success" type="submit">Search</button> */}

         <Row className="">
         <Col>
         {isConnected ? (
            <BsPersonCircle size="2rem" />
          ) : (
            <div>
              <BsPersonCircle size="2rem" color="green" className="pl-3"/>
            </div>
          )}</Col>
          <Col><BiMessageDetail size="2rem" /></Col>
         </Row> 
        </div>
      </div>
    </nav>
  );
}

export default Nav;
