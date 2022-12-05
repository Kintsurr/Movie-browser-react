import { Link } from "react-router-dom";
import default_poster from "../images/default_poster.jpg";

const MovieCard = ({ movie }) => {
    var posterUrl;
    function renderPoster() {
      if (movie.poster_path !== null) {
        posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      } else {
        posterUrl = default_poster;
      }
      return posterUrl;
    }
  
    const detailUrl = `/movies/${movie.id}`;
    return (
      <>
        <div className="col-lg-2 col-md-3 col-2 my-4">
          <div className="card">
            <img
              src={renderPoster()}
              className="card-img-top"
              alt={movie.original_title}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.original_title}</h5>
              <Link to={detailUrl} className="btn btn-primary">
                Show Details{" "}
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default MovieCard