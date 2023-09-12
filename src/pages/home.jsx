import { redirect } from "react-router-dom";

function Home() {
  function handleClick() {
    redirect("/artworks");
  }
  return (
    <div className="home">
      <h1>Artsy!</h1>
      <button className="explore-btn" onClick={handleClick}>
        Explore
      </button>
      <div className="description">
        <p>
          A curated collection of art from the acclaimed Art institute of
          Chicago. Whether you're a seasoned art lover, or just starting to
          explore, we have something for you.
        </p>
      </div>
    </div>
  );
}

export default Home;
