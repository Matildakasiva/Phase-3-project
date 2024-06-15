import Card from 'react-bootstrap/Card';
import { MdDeleteForever } from 'react-icons/md';

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <Card
      bg="light"
      style={{ width: '18rem' }}
      className="mb-2 shadow-sm"
    >
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <small className="text-muted">{date}</small>
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            size="1.3em"
            className="text-danger cursor-pointer"
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Note;