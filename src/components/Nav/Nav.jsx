import React from "react";
import SearchBar from "../SearchBar/SearchBar"

export default function Nav(props){
    return (
        <div style={{backgroundColor: '#000000', padding: '25px'}}>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

