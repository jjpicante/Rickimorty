import { useSelector } from "react-redux";
import style from "./Favorites.module.css"
import { NavLink } from "react-router-dom";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);

  return (
      
    <div>
      <div>
        <select name="" id="">
          <option value="Ascendente"></option>
          <option value="Descendente"></option>
          </select>
          <select name="" id="">
          <option value="Male"></option>
          <option value="Female"></option>
          <option value="Unknown"></option>
          <option value="Genderless"></option>
          </select>
      </div>

      {myFavorites.map((character) => {
        return (
          <div className={style.cardsindiv}>
            <h2 className={style.name}>{character.name}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <NavLink to={`/detail/${character.id}`}>
              <img src={character.image} alt={character.name} />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
         
