import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SideNavbar from "../Components/SideNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BASE_URL } from "../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Venture() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/destination`)
   .then((response) => response.json())
   .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      });
  }, []);

  return (
    <div >
      <div>
        <SideNavbar />
      </div >
      <div className="container py-5">
      <div className="row justify-content-center">
        {data.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <Card className="shadow">
              <Card.Img variant="top" src={item.image} className="img-fluid" />
              <Card.Body className="bg-cream" style={{ minHeight: "400px" }}>
                <Card.Title className="text-black">{item.name}</Card.Title>
                <Card.Text className="text-dark">
                  Location: {item.location}
                </Card.Text>
                <Card.Text className="text-dark">
                  {item.description}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="outline-secondary"
                    href="/Plan"
                    className="mr-2"
                  >
                    Plan this trip
                  </Button>
                  <Button variant="outline-secondary" >
                    <Link to={`/Details/${item.id}`} >
                    Destination Details
                  </Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default Venture;