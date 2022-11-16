import React from "react";
import { Grid, Row, Col, FlexboxGrid, Input, InputGroup } from "rsuite";
import logoDEWYS from "./../../assets/logo/logoDEWYS.png";
import { BsFacebook, BsGoogle, BsInstagram } from "react-icons/bs";
import SearchIcon from "@rsuite/icons/Search";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#3498FF",
        color: "white",
        padding: "50px",
      }}
    >
      <FlexboxGrid
        justify="space-between"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <FlexboxGrid.Item colspan={7}>
          <Col xs={13}>
            <div className="show-col row">
              <img width={"60px"} height={"50px"} src={logoDEWYS} alt="logo" />
            </div>
            <div className="show-col row">
              <div>dewys@gmail.com</div>
            </div>
            <div className="show-col row">
              <div>+216 55 522 669</div>
            </div>
            <div className="show-col row">
              <div>8525 Toilet right house corner,Lac 1</div>
            </div>
            <div className="show-col row">
              <BsFacebook />
              <BsGoogle />
              <BsInstagram />
            </div>
          </Col>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={4}>
          <Col>
            <div className="show-col row">Home</div>
            <div className="show-col row">Browse Jobs</div>
            <div className="show-col row">About</div>
            <div className="show-col row">Contact</div>
          </Col>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={4}>
          <Col xs={4}>
            <div className="show-col row">Development</div>
            <div className="show-col row">Design</div>
            <div className="show-col row">Finance</div>
            <div className="show-col row">Marketing</div>
          </Col>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={5}>
          <Col xs={20}>
            <div className="show-col row">
              <InputGroup style={{ width: "300", marginBottom: "10" }}>
                <Input />
                <InputGroup.Button>
                  <InputGroup.Addon>Subscribe</InputGroup.Addon>
                  <SearchIcon />
                </InputGroup.Button>
              </InputGroup>
            </div>
            <div className="show-col row">
              Let us reach you with all the news
            </div>
          </Col>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={4}>CopyRights ©️</FlexboxGrid.Item>{" "}
      </FlexboxGrid>
    </div>
  );
};

export default Footer;
