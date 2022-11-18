import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";


const MovieView = () => {
    const {id} = useParams()
     console.log(id);
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=02e0efe9b8e7846748af28dc0cdc3f6e&language=en-US`)
        .then(response => response.json())
        .then(data => {       
                setMovieDetails(data)
                setIsLoading(false)       
        })
    }, [id])

    const backdropUrl= `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`


    function renderMovieDetails(){
        if(isLoading){
           return <Hero text="Loading..."/>
        }
        else{
           return(
            <>
            <Hero text={`${movieDetails.original_title} ${movieDetails.release_date?.substring(0,4)}`} backdrop={backdropUrl}/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-2">
                   <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt="..." className="img-fluid shadow rounded"/>
                    </div>
                    <div className="col-md-9">
                        <h2>{movieDetails.original_title}</h2>
                        <p className="lead">{movieDetails.overview}</p>
                    </div>
                </div>
            </div>
            </>
           ) 
        }
    }

    return renderMovieDetails()
}

export default MovieView;