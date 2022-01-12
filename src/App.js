import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import MaxInput from './components/MaxInput';
import Notes from './components/Notes';

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
const [toggleAdd, setToggleAdd] = useState(true);
const [isEdited, setIsEdited] = useState(null)
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
        alert('Fill Both Field');     //when note is empty do nothing
      }
      else if(newNote && !toggleAdd){   //if there is something on the new note and if there is an edit icon
        setNotes(
          notes.map((elem)=>{
             if(elem.id === isEdited){
                return {...elem, name:newNote} //update name(title and description) of selected item
            }
            return elem;
          })
        )
        setToggleAdd(true)
        setNewNote(({
          title:"",
          description:""
        }))
      }
      else{
        setNotes((oldNote) => {
          const data = {id:new Date().getTime().toString(), name:newNote} //do not need to pass this as props to get the data, don't be confused.All the data is storing in notes through set notes, with this notes is now a object that contains id, title and description
          return [...oldNote, data];
        });
        setNewNote({title:"", description:""})
      }
      }

      const handleUpdate = (id) => {
        const newUpdatedNote = notes.find((item)=>item.id === id)
        console.log(newUpdatedNote);
        setShow(false)              //when we click on edit maxInput field should open
        setToggleAdd(false)
        setNewNote(({
          title:newUpdatedNote.name.title,
          description:newUpdatedNote.name.description
        }))
        setIsEdited(id);
      }

      useEffect(() => {
        localStorage.setItem('keep', JSON.stringify(notes))
      }, [notes])

  return (
    <>
      <Header />
      { show? <Input takeNote={takeNote}/> : <MaxInput minInput={minInput} handleInput={handleInput} handleUpdate={handleUpdate} newNote={newNote} addNote={addNote} notes={notes} toggleAdd = {toggleAdd} setToggleAdd = {setToggleAdd}/> }
      <Notes notes={notes} setNotes = {setNotes} handleUpdate={handleUpdate}/>
      <div className='flex justify-center pb-2'>
        <a className='text-indigo-700 font-semibold fixed bottom-10' href="https://github.com/sanjeebsomu" target="_blank" rel="noopener noreferrer">Visit My Github Profile</a>
        <p className='text-pink-600 fixed bottom-2'>Made With ❤ From Sanjeeb</p>
      </div>
    </>
  );
}

export default App;
