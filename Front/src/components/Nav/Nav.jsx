import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"



export default function Nav(props){
    return (
        <div style={{backgroundColor: '#000000', padding: '25px', borderRadius: '20px'}}>
           <NavLink to="/home" className={style.botones}>
           <span>Home</span>
           </NavLink>
           <NavLink to="/about" className={style.botones}>
           <span>About</span>
           </NavLink>
           <NavLink to="/favorites" className={style.botones}>
            <span>Favorites</span>
           </NavLink>
           <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

