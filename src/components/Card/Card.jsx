
import styles from "./../../Cartas.module.css"
import { Link } from "react-router-dom";

export default function Card({name, species, gender, image, onClose, id}) {
   return (
      
      <div className= {styles.cardsindiv}>
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

