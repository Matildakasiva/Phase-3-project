import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "../Components/SideNavbar";
import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card, ListGroup } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
                  <ReactQuill
                    value={newEntry}
                    onChange={(content, delta, source, editor) => setNewEntry(editor.getHTML())}
                    placeholder="Start writing..."
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'trike'],
                        ['link', 'image'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['clean'],
                      ],
                    }}
                    style={{ height: '300px', width: '100%' }}
                  />
                </Form.Group>
                <br /> <br />
                <Button 
                variant="outline-secondary" 
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
                    <div dangerouslySetInnerHTML={{ __html: entry }} />
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