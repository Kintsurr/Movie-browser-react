import Hero from "./Hero";
import notFoundImg from "../images/search.png"
import MovieCard from "./MovieCard";

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
