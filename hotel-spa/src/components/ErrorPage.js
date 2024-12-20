import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ErrorPage({ message }) {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-top align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="display-5 text-danger m-3">Error</h1>
      <p className="lead text-center">{message}</p>
      <Link to="/hotels">
        <Button variant="primary">Back to Hotels</Button>
      </Link>
    </Container>
  );
}

export default ErrorPage;
