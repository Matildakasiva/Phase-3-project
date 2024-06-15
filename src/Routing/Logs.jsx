import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "../Components/SideNavbar";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Logs() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [editingEntry, setEditingEntry] = useState(null);

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
            <Card className="bg-white p-4 rounded shadow">
              <h2 className="text-black">My Travel Journal</h2>
              <Form>
                <Form.Group controlId="newEntry">
                  <Form.Label>Write your thoughts...</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    value={newEntry}
                    onChange={(e) => setNewEntry(e.target.value)}
                    placeholder="Start writing..."
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleAddEntry}>
                  {editingEntry!== null? "Update Entry" : "Add Entry"}
                </Button>
              </Form>
            </Card>
          </Col>
          <Col md={4} className="pl-4">
            <Card className="bg-white p-4 rounded shadow">
              <h2 className="text-black">Previous Entries</h2>
              <ul>
                {entries.map((entry, index) => (
                  <li key={index}>
                    <p>{entry}</p>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteEntry(index)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handleEditEntry(index)}
                    >
                      Edit
                    </Button>
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Logs;