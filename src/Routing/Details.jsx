import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SideNavbar from "../Components/SideNavbar";
import "bootstrap/dist/css/bootstrap.min.css";


function Details() {

  return (
    <div>
      <div>
        <SideNavbar />
      </div>
      <div >
      <Card style={{ width: "30rem", height: "15rem", margin: "20px" }} className="shadow">
        <Card.Img variant="top" src="photo.jpg" className="img-fluid" />
        <Card.Body className="bg-cream">
          <Card.Title className="text-black">Card Title</Card.Title>
          <Card.Text className="text-dark">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary" href="/Jotting" className="mr-2">
              Plan this trip
            </Button>
          </div>
        </Card.Body>
      </Card>
      </div>

     
    </div>
  );
}

export default Details;
