import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <Hero text="Welcome to to Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Here you can search and find films and their details. <br/>
              ------------------------------------------------
              <h3>Features that will be added soon</h3>
              <p> help people in choosing the movie according to their interests </p>
              <p> find out film's name if you remember the actor's name or even a short scene from the film.</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
