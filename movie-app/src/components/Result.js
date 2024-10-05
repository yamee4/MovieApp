import React from "react";

function Result({result, openPopUp}){
    return(    
        <div className="result-box" onClick={() => openPopUp(result.imdbID)}>
            <img src ={result.Poster}/>
            <h3>{result.Title}</h3>
        </div>
    )

}

export default Result;