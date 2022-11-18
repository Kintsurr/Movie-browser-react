import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <Hero text="Welcome to react 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              officia optio odio esse blanditiis aliquam laboriosam repellat
              similique quis adipisci, corporis temporibus vel, facere quam
              voluptates quidem saepe et amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
