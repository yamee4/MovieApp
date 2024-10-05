import React from "react";

function Search({handleInput, search}){
    return(
        <section className="search-box-wrap">
            <input 
                type="text" 
                placeholder="Search" 
                className="search-box" 
                onChange={handleInput} 
                onKeyDown={search}
            />

        </section>
    )
}

export default Search;