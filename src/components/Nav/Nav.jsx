import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.css"

export default function Nav(props){
    return (
        <div style={{backgroundColor: '#000000', padding: '25px', borderRadius: '20px'}}>
           <NavLink to="/home" className= "botones">
           <span>Home</span>
           </NavLink>
           <NavLink to="/about" className= "botones">
           <span>About</span>
           </NavLink>
           <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

