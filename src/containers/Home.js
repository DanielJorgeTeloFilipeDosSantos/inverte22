import React, { Component } from "react";
import Products from "../components/Products";
import Container from "react-bootstrap/Container";
import Background from "../components/Background";

export class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Background />
          <Container style={{ paddingLeft: "10%", paddingRight: "10%" }}>
            <h1 style={{ color: "gray", marginTop: 30 }}>Products</h1>
            <p>Our new Products</p>
          </Container>
          <Container>
            <Products />
          </Container>
        </header>
      </div>
    );
  }
}

export default Home;
