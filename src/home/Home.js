import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { Col, Container, FormGroup, Form, Row, Button } from "react-bootstrap";
import "./Home.css";
import Card from "../component/card/Card";
import Contact from "../component/contact";
import Service from "../component/ourSerivces/service";
import SearchMenu from "../component/search-menu/searchMenu";
import Swiper from "../component/swiper/Swiper";
import Login from "../login/Login";
import Nav from "../navbar/Nav";
import announcementsData from "../mocks/announcement.json";
import axios from "axios";
import {Provider, useDispatch, useSelector} from 'react-redux';
import { selectAnnouncesToFilter, setAnnouncesToFilter } from "../slices/navSlice";
import { store } from "../store";
function Home() {

  const selectAnnounces = useSelector(selectAnnouncesToFilter);
const [data, setData] = useState([])
  useEffect(() => {

    // axios.get('https://raw.githubusercontent.com/high54/Communes-France-JSON/master/france.json').then(data =>{
  
    // }).catch(error => {
    //   console.log(error);
    // });
    setData(announcementsData)
    return () => {};
  }, []);

  return (
    <div>
     <Row>
        <section
          class="home"
          id="home"
          style={{
            width: "100%",
          }}
        >
          <Container>
            <h1
              class="heading"
              style={{ textAlign: "center", padding: "2rem", fontSize: "4rem" }}
            >
              <span>{selectAnnounces?.length} agents immobiliers partout, rien que pour vous !</span>
            </h1>
            <SearchMenu announcements = {data} setData={setData}/>
          </Container>
        </section>
      </Row>
      <Row>
        {selectAnnounces
          ? selectAnnounces.map((ann) => {
              // Return the element. Also pass key
              return <Col className="pt-4">
              <Card announcement={ann}/>
              </Col>;
            })
          : ""}
      </Row>
      <Service />
      <Contact /></div>
  );
}

export default Home;
