import Hero from "./Hero";
import { useState, useEffect } from "react";
import ShowMovies from "./ShowMovies";
import MultiRangeSlider from "./MultiRangeSlider";


const LookForMovie = () => {
  const [genres, setGenres] = useState([]);
  const [checked, setChecked] = useState([]);
  var updatedYears = {};

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=02e0efe9b8e7846748af28dc0cdc3f6e&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
      });
  });
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  const handleYears = (min, max) => {
     updatedYears = {minYear: min, maxYear: max};
  } 

  const GenreSelection = genres.map((obj, i) => {
    
    return (
      <div key={i} className="genreBox form-group form-check">
        <input
          type="checkbox"
          className="genreBoxInput form-check-input"
          id={`exampleCheck${i}`}
          value={obj.name}
          onChange={handleCheck}
        />
        <label
          className="genreBoxLabel form-check-label"
          htmlFor={`exampleCheck${i}`}
        >
          {obj.name}
        </label>
      </div>
    );
  });

  return (
    <div className="LFMBody">
      <Hero text={"We can find a movie for you according to your interests"} />
      <form onSubmit={ShowMovies}>
        <div className="container-fluid w-75 bg-light">
          <h3 className="p-2">Choose Film Genres</h3>
          <div className="genresContainer p-2">{GenreSelection}</div>
        </div>
        <div className="container-fluid w-75 bg-light">
          <h3 className="p-2">Choose years interval</h3>
          <MultiRangeSlider min={1878} max={2022} onChange={({min, max}) => handleYears({min, max})}/>
        </div>
      </form>
    </div>
  );
};
export default LookForMovie;
