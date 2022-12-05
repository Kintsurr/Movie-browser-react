import { useState, useEffect} from "react";

const ShowMovies =({genres, startYear, endYear, startRatings, endRatings}) =>{
    const [discover, setDiscover] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=02e0efe9b8e7846748af28dc0cdc3f6e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${startYear}&release_date.lte=${endYear}&vote_average.gte=${startRatings}&vote_average.lte=${endRatings}&with_genres=${genres}&with_watch_monetization_types=flatrate`)
          .then(response => response.json())
          .then(data =>{
            setDiscover(data.results)
          })

      })
return(
    <>
    <h2>{genres}</h2>
    <h2>{startYear}</h2>
    <h2>{endYear}</h2>
    <h2>{startRatings}</h2>
    <h2>{endRatings}</h2>
    </>
)
}
export default ShowMovies