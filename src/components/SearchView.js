import Hero from "./Hero";
import { Link } from "react-router-dom";
import default_poster from "../images/default_poster.jpg";
import notFoundImg from "../images/search.png"

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

const SearchView = ({ keyword, searchResults, status}) => {
  const title = `You are searching for ${keyword}`;
  var indexArr = []
  const resultHtml = searchResults.map((obj, i) => {
    indexArr.push(i)
    return <MovieCard movie={obj} key={i} />;
  });
  
  if(indexArr.length === 0 && keyword !== ""){
    return (
      <>
        <Hero text= {title}/>
        <img src={notFoundImg} alt="..." className="notFoundImg"/>
        <div className="text-center">
        <h1 className="display-1 fw-bold">Oops...</h1>
            <p className="fs-3"> Movie named <span className="text-danger">{keyword}</span> not found</p>
        </div>
      </>
    );
  }else{
    return(
      <>
        <Hero text={title} />
        {resultHtml && (
          <div className="Container">
            <div className="row"> 
              {resultHtml}  
            </div>
          </div>
        )}

      </>
   ) 
  }
  
};
export default SearchView;
