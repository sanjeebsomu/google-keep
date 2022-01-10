import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import MaxInput from './components/MaxInput';

function App() {
  
const [show, setShow] = useState(true);
  const takeNote = () => {
    setShow(false);
  };

  return (
    <>
      <Header />
      { show? <Input takeNote={takeNote}/> : <MaxInput /> }
    </>
  );
}

export default App;
