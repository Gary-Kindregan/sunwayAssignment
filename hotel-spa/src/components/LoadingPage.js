import React from "react";
import { Container, Spinner } from "react-bootstrap";

function LoadingPage({ message }) {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-top align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="display-5 m-3">{message}...</h1>
      <Spinner animation="border" variant="primary" />
    </Container>
  );
}

export default LoadingPage;
