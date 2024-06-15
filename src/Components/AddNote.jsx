import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AddNote = (props) => {
  const [noteText, setNoteText] = useState('');
  const maxChars = 10000;

  const handleChange = (event) => {
    const remaining = maxChars - event.target.value.length;
    if (remaining >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      props.handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={6} className="mx-auto">
          <Form>
            <Form.Group controlId="noteText">
              <Form.Label>Enter a new note:</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                value={noteText}
                onChange={handleChange}
                placeholder="Type to add a note..."
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSaveClick}>
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNote;