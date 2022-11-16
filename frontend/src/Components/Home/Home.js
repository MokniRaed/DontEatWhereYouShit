import React from "react";
import SearchSection from "./SearchSection/SearchSection";
import { Welcome } from "./Welcome/Welcome";
import { List, FlexboxGrid, Grid, Row, Col, Button } from "rsuite";

export const Home = () => {
  return (
    <div style={{ margin: "50px" }}>
      <Welcome />
      <SearchSection />
      <div className="show-grid">
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item as={Col} md={18}>
            <Grid fluid>
              <Row>
                <Col xs={6} xsPush={21}>
                  <Button size="lg" appearance="primary" color="green">
                    Browser more
                  </Button>
                </Col>
                <Col xs={6} xsPull={6}>
                  <h4>Job Listing</h4>
                </Col>
              </Row>
              <Row>
                <List hover>
                  <List.Item>Software Engineer</List.Item>
                  <List.Item>Digital Marketer</List.Item>
                  <List.Item>Wordpress Developer</List.Item>
                  <List.Item>Visual Designer</List.Item>
                </List>
              </Row>
            </Grid>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </div>
  );
};
