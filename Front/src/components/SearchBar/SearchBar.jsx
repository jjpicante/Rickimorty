import { useState } from "react";
import styles from "./SearchBar.css"

export default function SearchBar(props) {
      
   const [buscar, setBuscar] = useState('');
   
   const handleChange = (event) =>{
      setBuscar(event.target.value);
   }
   return (
      <div className="buscador">
         <input className="input" type='search' value= {buscar} onChange={handleChange}/>
         <button className="boton" onClick={() => props.onSearch(buscar)}>Agregar</button> 
      </div>
   );
}
