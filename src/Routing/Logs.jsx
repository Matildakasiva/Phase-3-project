import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "../Components/SideNavbar";
import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card, ListGroup } from "react-bootstrap";
import { BASE_URL } from "../utils";

function Logs() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [editingEntry, setEditingEntry] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/journal_entries`)
    .then(res => res.json())
    .then(data => setEntries(data))
  }, [])

  const handleAddEntry = () => {
    if (editingEntry!== null) {
      // Update existing entry
      setEntries(
        entries.map((entry, i) =>
          i === editingEntry? newEntry : entry
        )
      );
    } else {
      // Add new entry
      setEntries([...entries, newEntry]);
    }
    setNewEntry("");
    setEditingEntry(null);
  };

  const handleDeleteEntry = (index) => {
    setEntries(entries.filter((entry, i) => i!== index));
  };

  const handleEditEntry = (index) => {
    setNewEntry(entries[index]);
    setEditingEntry(index);
  };

  return (
    <div>
      <SideNavbar />

      <Container className="pt-5">
        <Row>
          <Col md={8} className="pr-4">

            <Card 
            className="bg-white p-4 rounded shadow"
            style={{ borderColor: "#ddd", borderWidth: 1 }}
            >
              <h2 className="text-black">My Travel Journal</h2>
              <Form>
                <Form.Group controlId="newEntry">
                  <Form.Label>Write your thoughts...</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    cols={50}
                    wrap="hard"
                    value={newEntry}
                    onChange={(e) => setNewEntry(e.target.value)}
                    placeholder="Start writing..."
                    style={{
                      backgroundImage: "linear-gradient(to bottom, #ccc 1px, transparent 1px)",
                      backgroundSize: "100% 20px"
                    }}
                  />
                </Form.Group>
                <Button 
                variant="primary" 
                onClick={handleAddEntry}
                style={{ fontSize: 18, padding: 10 }}>
                  {editingEntry!== null? "Update Entry" : "Add Entry"}
                </Button>
              </Form>
            </Card>
          </Col>
          <Col md={4} className="pl-4">
            <Card 
            className="bg-white p-4 rounded shadow"
            style={{ borderColor: "#ddd", borderWidth: 1 }}
            >
              <h2 className="text-black">Previous Entries</h2>
              <ListGroup variant="flush">
                {entries.map((entry, index) => (
                  <ListGroup.Item key={index} style={{ padding: 10 }}>
                    <p style={{ fontSize: 18 }}>{entry}</p>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteEntry(index)}
                      style={{ fontSize: 16, padding: 5 }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handleEditEntry(index)}
                      style={{ fontSize: 16, padding: 5 }}
                    >
                      Edit
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    
    </div>
  );
}

export default Logs;