import { useState, useEffect} from "react";
import MovieCard from "./MovieCard";
const ShowMovies =({genres, startYear, endYear, startRatings, endRatings}) =>{
    const [discover, setDiscover] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=02e0efe9b8e7846748af28dc0cdc3f6e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${startYear}&release_date.lte=${endYear}&vote_average.gte=${startRatings}&vote_average.lte=${endRatings}&with_genres=${genres}&with_watch_monetization_types=flatrate`)
          .then(response => response.json())
          .then(data =>{
            setDiscover(data.results)
          })

      })

     const resultDiscover = discover.map((obj, i) =>{
      return <MovieCard movie={obj} key={i} />;
     })
return(
    <>
     {resultDiscover && (
          <div className="Container">
            <div className="row"> 
              {resultDiscover}  
            </div>
          </div>
        )}
    </>
)
}
export default ShowMovies