import React from 'react'
import { FlexboxGrid, Col,Row } from "rsuite";


export const Welcome = () => {
  return (
    <div>
        <FlexboxGrid as={Row} gutter={16} justify="space-around">
          <FlexboxGrid.Item  as={Col} colspan={26} md={9} style={{marginTop:"50px"}}>
            <h5 >4500+ Jobs listed</h5>
            <h3 style={{margin:"10px"}}>Find Your Next Shity Job 💩</h3>
            <p >
              We provide online jobs search with the best way that suit your
              term as a shit
            </p>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={8}>
            <div>
              <img
                width={"600px"}
                alt="team work illustration"
                src="https://technext.github.io/job-board-2/img/banner/illustration.png"
              />
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
    </div>
  )
}
