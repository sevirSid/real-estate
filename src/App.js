import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { Col, Container, FormGroup, Form, Row, Button } from "react-bootstrap";
import "./App.css";
import Card from "./component/card/Card";
import Contact from "./component/contact";
import Service from "./component/ourSerivces/service";
import SearchMenu from "./component/search-menu/searchMenu";
import Swiper from "./component/swiper/Swiper";
import Login from "./login/Login";
import Nav from "./navbar/Nav";
import announcementsData from "./mocks/announcement.json";
import axios from "axios";
import {Provider, useDispatch, useSelector} from 'react-redux';
import { selectAnnouncesToFilter, setAnnouncesToFilter } from "./slices/navSlice";
import { store } from "./store";
import Home from "./home/Home";
// let announcementsData = [
//   {
//     agencyowner: "agency",
//     city: "Sydney CBD",
//     homeType: "House",
//     bedrooms: 3,
//     price: 850,
//     space: 200,
//     elevators: false,
//     pool: true,
//     gym: false,
//     balcony: false,
//     image: "https://image.ibb.co/dTVGR7/rs_thumb01.png",
//   },
// ];
function App() {

  const selectAnnounces = useSelector(selectAnnouncesToFilter);

  useEffect(() => {
    // axios.get('https://raw.githubusercontent.com/high54/Communes-France-JSON/master/france.json').then(data =>{
  
    // }).catch(error => {
    //   console.log(error);
    // });
    
    return () => {};
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        // {
        //   path: "/write",
        //   element: <Write />,
        // },
      ],
    },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);

  
  return (
    
    // <Container fluid>
    //   <Nav />
      
    //   <Home />
    // </Container>
    <RouterProvider router={router} />
    
  );
}

export default App;
