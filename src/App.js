import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import MaxInput from './components/MaxInput';
import Notes from './components/Notes';

// let globalID = 0;
function App() {

  const getLocalKeeps = () => {
    let keep = localStorage.getItem('keep');
    if(keep){
      return JSON.parse(keep)
    }else{
      return [];
    }
  }
  
const [show, setShow] = useState(true);
const [notes, setNotes] = useState(getLocalKeeps());
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
      if(newNote.title.length < 1 || newNote.description.length < 1){
        console.log('note is empty');     //when note is empty do nothing
      }
      else{
        setNotes((oldNote) => {
          const data = {id:new Date().getTime().toString(), name:newNote} //do not need to pass this as props to get the data, don't be confused.All the data is storing in notes through set notes, with this notes is now a object that contains id, title and description
          return [...oldNote, data];
        });
        setNewNote({title:"", description:""})
      }
      }

      useEffect(() => {
        localStorage.setItem('keep', JSON.stringify(notes))
      }, [notes])

  return (
    <>
      <Header />
      { show? <Input takeNote={takeNote}/> : <MaxInput minInput={minInput} handleInput={handleInput} newNote={newNote} addNote={addNote}/> }
      <Notes notes={notes} setNotes = {setNotes}/>
    </>
  );
}

export default App;
