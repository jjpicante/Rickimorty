import './App.css'

import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import CartaCreador from './components/About/About'
import styles from './Cartas.module.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App () {
  
  const [characters, setCharacters] = useState([])
  
  const onSearch=(buscar)=>{
    fetch(`https://rickandmortyapi.com/api/character/${buscar}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
}

const onClose = (id) =>{
  setCharacters(characters.filter(personaje => personaje.id !== id))
}
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path= "/home" elemnent={<Cards characters={characters} onClose= {onClose}/>}   />
        <Route path= "/about" element= {<CartaCreador/>} />
        <Route path= "/detail/:detailId" />
      </Routes>
      
      <Cards characters={characters} onClose= {onClose}/>
    </div>
      )
     }
       
    

export default App
