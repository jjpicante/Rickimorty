import './App.css'

import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import CartaCreador from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Favorites from './components/Favorites/Favorites'


function App () {
  const location = useLocation();
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const username = 'jjfiorovic@henry.com';
  const password = 'juan123';

  const login = (userData) =>{
      if(userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
      }
  }
    useEffect(() => {
       !access && navigate('/');
    }, [access]);
  
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
     {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch} />}
     <Routes>
      <Route path= "/home" element={<Cards characters={characters} onClose= {onClose}/>}   />
      <Route path= "/about" element= {<CartaCreador/>} />
      <Route path= "/detail/:id" element = {<Detail/>}  />
      <Route path='/favorites' element= {<Favorites/>} />
    </Routes>
  </div>
    )
   }

   

        
        
     
       
    

export default App
