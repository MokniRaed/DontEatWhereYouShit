import React from "react";
import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import { Button } from "rsuite";
import { FlexboxGrid, Col } from "rsuite";
import logoDEWYS from "./../../assets/logo/logoDEWYS.png";
import "./Navigator .css";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <div className="show-grid" >
      <FlexboxGrid
        justify="space-around"
        align="middle"
        style={{ margin: "20px" }}
      >
        <FlexboxGrid.Item as={Col} colspan={8}>
          <Navbar.Brand as={Link} to="/" style={{cursor:"pointer"}} >
            <div  align="middle">
              <h5>Don't Eat Where You Shit</h5>{" "}
              <img src={logoDEWYS} width={"60px"} height={"50px"} alt="logo" />
            </div>
          </Navbar.Brand>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={24} md={8}>
          <Nav>
            <Nav.Item as={Link} to="/" size="lg" icon={<HomeIcon />}>
              Home
            </Nav.Item> 
            <Nav.Item as={Link} size="lg">Broser Job</Nav.Item>
            <Nav.Item size="lg">Contact</Nav.Item>
          </Nav>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} colspan={4}>
          <Button  as={Link} to="/login" size="lg" appearance="link">
            Login
          </Button>
          <Button size="lg" appearance="primary">
            Post a Job
          </Button>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default Navigator;
