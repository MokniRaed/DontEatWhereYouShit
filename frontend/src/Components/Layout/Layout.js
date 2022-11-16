import React from "react";
import { Container, Header, Content, Footer } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./Layout.css"


const Layout = ({ header, content, footer }) => {
  
  return (
    <div >
      <Container >
        <Header>{header}</Header>
        <Content>{content}</Content>
        <Footer>{footer}</Footer>
      </Container>
    </div>
  );
};

export default Layout;
