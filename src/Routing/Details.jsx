import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SideNavbar from "../Components/SideNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BASE_URL } from "../utils";
import { useParams } from "react-router-dom";

function Details() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/details/${id}`)
     .then((response) => response.json())
     .then((data) => {
      console.log("Fetched data:", data);
      setData(data)
     } );
  }, [id]);

  return (
    <div className="container py-5" >
      <div>
        <SideNavbar />
      </div>
      <div className="row justify-content-center">
        {data && (
          <div className="col-md-4 mb-4">
            <Card className="shadow">
              <Card.Img variant="top" src={data.image} className="img-fluid" />
              <Card.Body className="bg-cream">
                <Card.Text className="text-black">
                  <strong> Place:</strong> {data.name}
                </Card.Text>
                <Card.Text className="text-dark">
                  <strong> Attraction sites: </strong> {data.attractions}
                </Card.Text>
                <Card.Text className="text-dark">
                  <strong> Festivals:</strong> {data.festivals}
                </Card.Text>
                <Card.Text className="text-dark">
                  <strong> Accomodation:</strong> {data.accomodation}
                </Card.Text>
                <Card.Text className="text-dark">
                  <strong> Vehicle-rentals:</strong> {data.vehicle_rentals}
                </Card.Text>
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
        )}
      </div>
    </div>
  );
}

export default Details;
