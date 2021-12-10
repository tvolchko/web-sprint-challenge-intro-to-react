import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion'

const App = () => {
  const [characters, setCharacters] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(()=> {
    axios.get('https://swapi.dev/api/people')
    .then((resp)=>{
      console.log(resp, 'big')
      setCharacters(resp.data)
    })
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
  <Accordion>
  {characters.map((char, idx) =>{
       return <Character char={char} eKey={idx}/>
      })}
  </Accordion>
    </div>
  );
}

export default App;
