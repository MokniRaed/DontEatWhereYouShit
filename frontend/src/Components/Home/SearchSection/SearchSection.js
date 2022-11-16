import React from 'react'
import { FlexboxGrid, Input, Dropdown, Button, Row } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import "./SearchSection.css"

const SearchSection = () => {
  return (
    <div>
       <div className="show-grid css-selector">
          <FlexboxGrid
            justify="center"
            style={{ margin: "50px", color: "white" }}
          >
            <h3>Let's Search For What Does Suits You</h3>
          </FlexboxGrid>

          <FlexboxGrid as={Row} gutter={16} justify="center">
            <FlexboxGrid.Item colspan={4}>
              <Input size="lg" placeholder="Search Key" />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4}>
              <Dropdown
                style={{ width: "200px" }}
                block
                appearance="ghost"
                size="lg"
                title="Location"
                trigger="hover"
              >
                <Dropdown.Item>Tunis</Dropdown.Item>
                <Dropdown.Item>Nabeul</Dropdown.Item>
              </Dropdown>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4}>
              <Dropdown
                block
                style={{ width: "200px" }}
                appearance="ghost"
                size="lg"
                title="Category"
                trigger="hover"
              >
                <Dropdown.Item>Design</Dropdown.Item>
                <Dropdown.Item>Marketing</Dropdown.Item>
                <Dropdown.Item>Web Developement</Dropdown.Item>
              </Dropdown>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4}>
              <Button block size="lg" appearance="primary" color="green">
                <SearchIcon />
                Find Job
              </Button>
            </FlexboxGrid.Item>
          </FlexboxGrid>
          <FlexboxGrid
            as={Row}
            gutter={16}
            align="middle"
            justify="center"
            style={{ margin: "30px" }}
          >
            <FlexboxGrid.Item  md={2}>
              Popular Search:
            </FlexboxGrid.Item>
            <FlexboxGrid.Item  md={2}>
              <Button color="yellow" appearance="ghost">
                Marketing
              </Button>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item  md={2}>
              <Button color="yellow" appearance="ghost">
                Web Developement
              </Button>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item  md={2}>
              <Button color="yellow" appearance="ghost">
                Graphic Design
              </Button>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </div>
    </div>
  )
}

export default SearchSection
