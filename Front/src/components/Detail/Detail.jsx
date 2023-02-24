import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect (() =>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((char) => {
        if (char.name) {
          console.log("entré")
        setCharacter(char);
        console.log(character)
      } else {
    
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
    }, [id])
    
    return (
      <div>
          
      <div>
        <img src={character?.image} alt= "Sin imágen"/>
      </div>  
      <h1>{character?.name}</h1>
      <h3>{character?.status}</h3>
      <h3>{character?.origin?.name}</h3>
      <h3>{character?.gender}</h3>
      <h3>{character?.species}</h3>
      <button>
      <Link to="/home">Home</Link>  
      </button>
     </div>
      

      
         
        )
        }
   
export default Detail;
          
          
                
            
     
    
            