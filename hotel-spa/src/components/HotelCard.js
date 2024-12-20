import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

function HotelCard({ hotel }) {
  const location = useLocation();
  const isHotelDetailsPage = location.pathname.includes(`hotels/${hotel.id}`);
  const viewDetailsLink = isHotelDetailsPage
    ? "/hotels"
    : `/hotels/${hotel.id}`;

  return (
    <div>
      <Link to={viewDetailsLink} style={{ textDecoration: "none" }}>
        <Card className="m-3">
          <Card.Body>
            <Row>
              <Col md={4}>
                <h2 className="card-title text-primary">
                  {hotel.name ? hotel.name : "Name Unknown"}
                </h2>
                <p className="card-text">
                  <strong>Location:</strong>{" "}
                  {hotel.location ? hotel.location : "Location Unknown"}
                </p>
                <p className="card-text">
                  <strong>Rating:</strong>{" "}
                  {hotel.rating ? hotel.rating : "Rating Unknown"}
                </p>
                <p className="card-text">
                  <strong>Board Basis:</strong>{" "}
                  {hotel.boardBasis ? hotel.boardBasis : "Board Basis Unknown"}
                </p>
                <p className="card-text">
                  <strong>Arrival Date & Departure Date:</strong>
                  <br />
                  {hotel.datesOfTravel == null || hotel.datesOfTravel.length < 2
                    ? "No Travel Date Information Available"
                    : hotel.datesOfTravel[0] +
                      " until " +
                      hotel.datesOfTravel[1]}
                </p>
              </Col>

              <Col md={4}>
                <h2 className="text-primary">Rooms Available</h2>

                {hotel.rooms == null || hotel.rooms.length === 0
                  ? "No Availability"
                  : hotel.rooms.map((room) => (
                      <p className="card-text">
                        <strong>{room.roomType}:</strong> {room.amount}{" "}
                        available
                      </p>
                    ))}
              </Col>

              {hotel.imageUrl ? (
                <Col
                  md={4}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Card.Img
                    src={`http://localhost:5225${hotel.imageUrl}`}
                    className="img-fluid"
                    style={{
                      maxHeight: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </Col>
              ) : null}
            </Row>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default HotelCard;
