import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../Redux/Actions";

export default function Card({ name, species, gender, image, onClose, id }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state=> state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, species, gender, image, onClose, id }));
    }
  };

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

  return (
    <div className={style.cardsindiv}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={onClose} className={style.btn}>
        X
      </button>
      <h2 className={style.name}>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
}
