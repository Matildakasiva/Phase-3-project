import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../Components/NoteList';
import { Container, Row, Col } from 'react-bootstrap';
import SideNavbar from '../Components/SideNavbar';
import Check from '../Components/Calender';


const NoteTaking = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/04/2021',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '21/04/2021',
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '28/04/2021',
    },
    {
      id: nanoid(),
      text: 'This is my new note!',
      date: '30/04/2021',
    },
  ]);


  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id!== id);
    setNotes(newNotes);
  };

  return (
    <div>
      <SideNavbar/>
      <div>
        <Check/>
      </div>
       <div className="bg-beige">
      <Container className="mt-3">
        <Row>
          <Col md={67} className="mx-auto">
            <NotesList
              notes={notes}
              handleAddNote={addNote}
              handleDeleteNote={deleteNote}
            />
          </Col>
        </Row>
      </Container>
      </div>
    </div>
    
  );
};

export default NoteTaking;