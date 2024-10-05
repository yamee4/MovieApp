import React from "react";

import Result from "./Result";

// function Result({result, openPopUp}){
//     return(    
//         <div className="result-box" onClick={() => openPopUp(result.imdbID)}>
//             <img src ={result.Poster}/>
//             <h3>{result.Title}</h3>
//         </div>
//     )

// }

function Results({results, openPopUp}){
    return(
        <section className="results-box">
            {results.map(result =>(
                <Result key={result.imdbID} result={result} openPopUp={openPopUp}/>
            ))}
        </section>
    )
}

export default Results;