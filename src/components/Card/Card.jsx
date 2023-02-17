
import styles from "./../../Cartas.module.css"

export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className= {styles.cardsindiv}>
         <button onClick={onClose} className={styles.btn}>X</button>
         <h2 className={styles.name}>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

