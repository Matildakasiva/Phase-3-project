import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "../Components/SideNavbar";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Logs() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [editingEntry, setEditingEntry] = useState(null)

  const handleAddEntry = () => {
    setEntries([...entries, newEntry]);
    setNewEntry("");
  };

  const handleDeleteEntry = (index) => {
    setEntries(entries.filter((entry, i) => i !== index));
  };

  return (
    <div>
      <SideNavbar />

      <Container>
        <Row>
          <Col md={8}>
            <h2>My Travel Journal</h2>
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
                Add Entry
              </Button>
            </Form>
          </Col>
          <Col md={4}>
            <h2>Previous Entries</h2>
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
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Logs;
