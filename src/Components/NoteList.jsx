import { Container, Row, Col } from 'react-bootstrap';
import Note from './Note';
import AddNote from './AddNote';

function NotesList({ notes, handleAddNote, handleDeleteNote}) {
  return (
    <Container className="mt-3">
      <Row>
        {notes
         .filter((note) =>
            note.text.toLowerCase()
          )
         .map((note) => (
            <Col md={3} key={note.id}>
              <Note
                id={note.id}
                text={note.text}
                date={note.date}
                handleDeleteNote={handleDeleteNote}
              />
            </Col>
          ))}
      </Row>
      <Row>
        <Col md={6}>
          <AddNote handleAddNote={handleAddNote} />
        </Col>
      </Row>
    </Container>
  );
}

export default NotesList;