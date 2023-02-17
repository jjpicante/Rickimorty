import { useState } from "react";

export default function SearchBar(props) {
      
   const [buscar, setBuscar] = useState('');
   
   const handleChange = (event) =>{
      setBuscar(event.target.value);
   }
   return (
      <div>
         <input type='search' value= {buscar} onChange={handleChange}/>
         <button onClick={() => props.onSearch(buscar)}>Agregar</button> 
      </div>
   );
}
