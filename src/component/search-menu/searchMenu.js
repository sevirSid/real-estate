import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormGroup,
  InputGroup,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "./searchMenu.css";
import data from "../../mocks/communes.json";
import dataAnnouncement from "../../mocks/announcement.json";
import {
  selectAnnouncesToFilter,
  setAnnouncesToFilter,
} from "../../slices/navSlice";
function SearchMenu({ announcements, setData }) {
  // const maxBudget = React.createRef();
  const [maxBudget, setMaxBudget] = useState(null);
  const [minAreaSize, setMinAreaSize] = useState(null);
  const [cartier, setCartier] = useState(null);
  const [homeType, setHomeType] = useState([]);
  const [filteredData, setFilteredData] = useState(dataAnnouncement);
  const [query, setQuery] = useState();
  const [filterCriteria, setFilterCriteria] = useState([
    { cartierF: "city" },
    { minAreaSizeF: "space" },
    { maxBudgetF: "price" },
    { homeTypeF: "homeType" },
  ]);
  const dispatch = useDispatch(); //dispatch(setCurrentPosition(placeTMP));
  dispatch(setAnnouncesToFilter(announcements));
  const selectCartier = () => {
    const res = [];
    data.map((element) => {
      // Return the element. Also pass key
      res.push(
        <option value={element.Nom_commune}>{element.Nom_commune}</option>
      );
    });
    return res;
  };
  const selectAnnounces = useSelector(selectAnnouncesToFilter);
  useEffect(() => {
    //   console.log('Max ---> ',maxBudget.current.value);
    // setFilteredData(dataAnnouncement);
    console.log("selectAnnounces  ", selectAnnounces);
    return () => {
      setCartier(null);
      setMinAreaSize(null);
      setMaxBudget(null);
      setHomeType([]);
    };
  }, [
    /** maxBudget, minAreaSize, cartier, homeType] **/ announcements,
    selectAnnounces,
  ]);

  const handleFilterCartier = (cartier) => {
    if( "Selectionnez un cartier".includes(cartier) ){

    }
      setData(
        filteredData.filter((element) => {
          return (
           element.city === cartier
          );
        })
      );
  };
  const handleMinArea = (minSize) => {
      setData(
        filteredData.filter((element) => {
          return (
            element.space >= minSize
          );
        })
      );
  };
  const handleMMaxBudget = (maxBudget) => {
      setData(
        filteredData.filter((element) => {
          return (
            element.price <= maxBudget
          );
        })
      );
  };
  // const filteredItems = useMemo(() => {
  //   return data.filter(item => {
  //     return item.toLowerCase().includes(query.toLowerCase())
  //   })
  // }, [items, query])

  const filterData = () => {
    if(cartier) handleFilterCartier(cartier)
    if(minAreaSize) handleMinArea(minAreaSize)
    if(maxBudget) handleMinArea(maxBudget)
    //     const result = selectAnnounces.filter(element => {
    //         return (maxBudget && element.price < maxBudget)
    //         && (minAreaSize && element.space >= minAreaSize)
    //     });
    //     if(maxBudget && minAreaSize && cartier){
    //       setData(selectAnnounces.filter(element => {
    //         return (element.price < maxBudget)
    //         && (element.space >= minAreaSize)
    //         && (element.city === cartier)
    //     }))
    //     }else if(maxBudget && minAreaSize){
    //       setData(selectAnnounces.filter(element => {
    //         return (element.price < maxBudget)
    //         && (element.space >= minAreaSize)
    //     }))
    //     }else if(minAreaSize && cartier){
    //       setData(selectAnnounces.filter(element => {
    //         return (element.space >= minAreaSize)
    //         && (element.city === cartier)
    //     }))
    //     }else if(maxBudget  && cartier){
    //       setData(selectAnnounces.filter(element => {
    //         return (element.price < maxBudget)
    //         && (element.city === cartier)
    //     }))
    //   }
    //   else if(maxBudget ){
    //     setData(selectAnnounces.filter(element => {
    //       return (element.price < maxBudget)
    //   }))}
    // else if( minAreaSize){
    //   setData(selectAnnounces.filter(element => {
    //     return (element.space >= minAreaSize)
    // }))}
    // else{
    //   setData(selectAnnounces.filter(element => {
    //     return (element.city === cartier)
    // }))}
  };
  return (
    <Container className="centredMenu">
      <Tabs
        defaultActiveKey="louer"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="acheter" title="Acheter">
          <span>11</span>
        </Tab>
        <Tab eventKey="louer" title="Louer">
          <span>11</span>
        </Tab>
        <Tab eventKey="publier" title="Publier">
          <span>11</span>
        </Tab>
      </Tabs>
      <div className="search-section">
        <Row className="d-flex align-items-baseline">
          {/* <Col md="12" lg="6" className="mb-3 mt-3">
        <FloatingLabel controlId="floatingSelect" label="Cartier">
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
        </Col> */}
          <Col md="12" lg="6">
            <FormGroup
              className="mb-3"
              id="input-group-3"
              label="city:"
              label-for="input-3"
            >
              {/* <Form.Label>Cartier</Form.Label> */}
              <Form.Select
                aria-label="Default select example"
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  paddingLeft: "0.75rem",
                  paddingRight: "0.75rem",
                }}
                onChange={(e) => {
                  console.log("e.target.value", e.target.value);
                  if (!e.target.value) return;
                  // handleFilterCartier(e.target.value)
                  setCartier(e.target.value);
                }}
              >
                <option>Selectionnez un cartier</option>
                {selectCartier()}
              </Form.Select>
            </FormGroup>
          </Col>
          {/* <Col md="6" lg="3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Surface</Form.Label>
            <Form.Control type="number" placeholder="120" />
          </Form.Group>
        </Col>
        <Col md="6" lg="3">
          <Form.Group className="mb-3" controlId="maxBudget.ControlInput">
            <Form.Label>Budget</Form.Label>
            <Form.Control type="number" placeholder="$25000" />
          </Form.Group>
        </Col> */}

          <Col md="6" lg="3">
            <FloatingLabel
              controlId="floatingInput"
              label="Budget Max"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="200"
                // onChange={console.log(cartier.current.value)}
                onChange={(e) => {
                  console.log("e.target.value", e.target.value);
                  if (!e.target.value) return;
                  // handleMMaxBudget(e.target.value)
                  setMaxBudget(e.target.value);
                }}
              />
            </FloatingLabel>
          </Col>
          <Col md="6" lg="3">
            <FloatingLabel
              controlId="floatingInput"
              label="Surface Min"
              className="mb-3"
            >
              {/* <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup> */}
              <Form.Control
                type="number"
                placeholder="200"
                onChange={(e) => {
                  console.log("e.target.value", e.target.value);
                  if (!e.target.value) return;
                  // handleMinArea(e.target.value)
                  setMinAreaSize(e.target.value);
                }}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <div className="d-flex justify-content-center mt-5">
          <Button type="submit" variant="danger" onClick={filterData}>
            <FaSearch /> Rechercher
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default SearchMenu;
