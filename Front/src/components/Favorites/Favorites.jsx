import { useSelector, useDispatch } from "react-redux";
import style from "./Favorites.module.css"
import { NavLink } from "react-router-dom";
import { orderCards, filterCards } from "../../Redux/Actions";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value))
  }

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }


  return (
      
    <div>
      <div>
        <select onChange={handlerOrder}>
          <option value="order" disabled='disabled'>Order By</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
          </select>
          <select onChange={handlerFilter}>
          <option value="order" disabled='disabled'>Filter By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
          </select>
      </div>
      <div className={style.containercartas}>
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
    </div>
  );
};

export default Favorites;
         
