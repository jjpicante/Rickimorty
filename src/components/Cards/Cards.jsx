import Card from '../Card/Card';
import styles from "./../../Cartas.module.css"


export default function Cards(props) {
   const { characters, onClose } = props;
   return <div className = {styles.cartas}>
      {
         characters?.map((element) => (
            <Card 
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            onClose={() => onClose(element.id)}
            key={element.id}
            id={element.id}
            />))}
         
   </div>;
}
