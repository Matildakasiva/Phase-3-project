import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SideNavbar from "../Components/SideNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BASE_URL } from "../utils";

function Details() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/details`)
     .then((response) => response.json())
     .then((data) => {
      console.log("Fetched data:", data);
      setData(data)
     } );
  }, []);

  return (
    <div className="container py-5">
      <div>
        <SideNavbar />
      </div>
      <div className="row justify-content-center">
        {data.map((details) => (
          <div key={details.id} className="col-md-4 mb-4">
            <Card
            className="shadow"
          >
            <Card.Img variant="top" src={details.image} className="img-fluid" />
            <Card.Body className="bg-cream">
              <Card.Text className="text-black">
               <strong> Place:</strong> {details.name}</Card.Text>
              <Card.Text className="text-dark">
               <strong> Attraction sites: </strong> {details.attractions}</Card.Text>
              <Card.Text className="text-dark">
               <strong> Festivals:</strong> {details.festivals}</Card.Text>
              <Card.Text className="text-dark">
                <strong> Accomodation:</strong>{details.accomodation}</Card.Text>
              <Card.Text className="text-dark">
               <strong> Vehicle-rentals:</strong> {details.vehicle_rentals}</Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="outline-secondary" href="/Jotting" className="mr-2">
                  Plan this trip
                </Button>
                <Button variant="outline-secondary" href="/">
                  Go Back
                </Button>
              </div>
            </Card.Body>
          </Card>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Details;