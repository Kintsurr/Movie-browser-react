import "./css/app.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView"
import MovieView from "./components/MovieView"
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorPage from "./components/Error";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  useEffect(() => {
    if(searchText){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=02e0efe9b8e7846748af28dc0cdc3f6e&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data =>{
        setSearchResults(data.results)
      })
    }
  }, [searchText])
  


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>}/>
        <Route path="/movies/:id" element={<MovieView/>} />
      </Routes>
    </div>
  );
}

export default App;
