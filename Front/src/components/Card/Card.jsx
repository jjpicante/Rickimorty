
import styles from "./../../Cartas.module.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFavorite, deleteFavorite } from "../../Redux/Actions";

export default function Card({ name, species, gender, image, onClose, id }) {
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({ name, species, gender, image, onClose, id }))
      }

   }
   return (
    
      <div className= {styles.cardsindiv}>
           {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }
         <button onClick={onClose} className={styles.btn}>X</button>
         <h2 className={styles.name}>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <Link to={`/detail/${id}`} >
         <img src={image} alt={name} />
         </Link>
      </div>
      
   );
}

