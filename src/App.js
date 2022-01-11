import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import MaxInput from './components/MaxInput';
import Notes from './components/Notes';

function App() {
  
const [show, setShow] = useState(true);
const [notes, setNotes] = useState([]);
const [newNote, setNewNote] = useState({
  title:"",
  description:""
})

  const takeNote = () => {
    setShow(false);
  };
  const minInput = () => {
    setShow(true);
  }
  const handleInput = (e) => {
    const {name, value} = e.target;
    setNewNote({...newNote, [name]:value})

    }
    const addNote = (e) => {
      setNotes((oldNote) => {
        return [...oldNote, newNote];
      });
      setNewNote({title:"", description:""})
  }

  return (
    <>
      <Header />
      { show? <Input takeNote={takeNote}/> : <MaxInput minInput={minInput} handleInput={handleInput} newNote={newNote} addNote={addNote}/> }
      <Notes notes={notes}/>
    </>
  );
}

export default App;
