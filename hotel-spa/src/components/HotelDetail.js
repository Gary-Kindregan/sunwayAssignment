import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";

import HotelCard from "./HotelCard";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

function HotelDetail() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHotel(id) {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:5225/api/hotels/${id}`);
        if (!response.ok) {
          throw new Error(
            `Status Code: ${response.status} Failed to fetch details for hotel with id ${id}.`
          );
        }

        const data = await response.json();
        setHotel(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchHotel(id);
  }, [id]);

  if (error) {
    return <ErrorPage message={error} />;
  }

  if (isLoading) {
    return <LoadingPage message="Retrieving Hotel" />;
  }

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="display-1 m-3">Hotel</h1>
      <Row className="d-flex justify-content-center align-items-center w-100">
        <Col xs={9}>
          <HotelCard hotel={hotel} />
        </Col>
      </Row>

      <Row className="d-flex justify-content-center w-100">
        <Col xs={9}>
          <Link className="m-3" to={"/hotels/"}>
            <Button variant="primary">Back to Hotels</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HotelDetail;
