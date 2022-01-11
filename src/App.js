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
    const addNote = () => {
    console.log(notes);
    console.log('added');
    setNotes((oldNote) => {
      return [...oldNote, newNote];
    });
  }

  return (
    <>
      <Header />
      { show? <Input takeNote={takeNote}/> : <MaxInput minInput={minInput} handleInput={handleInput} addNote={addNote}/> }
      <Notes notes={notes}/>
    </>
  );
}

export default App;
