import Hero from "./Hero"
import { useState, useEffect } from "react";
import GenreBox from "./GenreBox";

    
const LookForMovie = () =>{
    const[genres,setGenres] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=02e0efe9b8e7846748af28dc0cdc3f6e&language=en-US")
        .then(response => response.json())
        .then(data =>{
            setGenres(data.genres)
            
        })
    })
    var GenreSelection = genres.map((obj, i) => {
        return(
            <div key={i} className="genreBox form-group form-check bg-dark text-white m">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">{obj.name}</label>
            </div>
        ) 
    })
    return(
        <>
        <Hero text={"We can find a movie for you according to your interests"} />
        <div className="LFMContainer">
            <label className="form-label">Enter your interests</label>
            <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
            <div id="passwordHelpBlock" className="form-text">
                each word is taken as one key. after click space you should search another word. <br />
                ex: drama war... <br />
                1st word - drama. 2nd word - war.
            </div>
        </div>
        <div className="genresContainer">
        {GenreSelection}
        </div>
        </>
    )
}
export default LookForMovie