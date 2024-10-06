import React, {useState} from "react";
import axios from 'axios';
import Search from "./components/Search";
import Results from "./components/Results";
import PopUp from "./components/PopUp";

function App() {
  const [searchState, setSearchState] = useState({
     str: "",
     results: [],
     selected: {},
  });

  const APIURL = "http://www.omdbapi.com/?i=tt3896198&apikey=a027448c";

  const searchMovie = (e) =>{
    if(e.key === "Enter"){
      axios(APIURL + "&s=" + searchState.str).then(({data}) =>{
        let res = data.Search;
        setSearchState(prevState =>{
          return {...prevState, results:res};
        });
      });
    }
  }

  const handleInput = (e) => {
    let str = e.target.value;

    setSearchState(prevState =>{
      return {...prevState, str:str};
    });

  }

  const openPopUp = id =>{
    axios(APIURL + "&id=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setSearchState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopUp = () =>{
    setSearchState(prevState =>{
      return {...prevState, selected:{}};
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={searchMovie}/>
        <Results results={searchState.results} openPopUp={openPopUp}/>
        {(typeof searchState.selected.Title != "undefined")? <PopUp selected={searchState.selected} closePopUp={closePopUp} /> : false}
      </main>
    </div>
  );
}


export default App;
