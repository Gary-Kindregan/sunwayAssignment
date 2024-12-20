import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import HotelCard from "./HotelCard";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHotels() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:5225/api/hotels");
        if (!response.ok) {
          throw new Error(
            `Status Code: ${response.status}. An error occured retrieving details for all hotels.`
          );
        }
        const data = await response.json();
        setHotels(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchHotels();
  }, []);

  if (isLoading) {
    return <LoadingPage message="Retrieving Hotels" />;
  }

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="display-1 m-3">Hotels</h1>
      <Row className="d-flex justify-content-center align-items-center w-100">
        {hotels.map((hotel) => (
          <Col xs={9} key={hotel.id}>
            <HotelCard hotel={hotel} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HotelList;
