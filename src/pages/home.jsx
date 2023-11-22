// import { } from "/art_gallery.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigator = useNavigate();
  function handleClick() {
    navigator("/artworks");
  }
  return (
    <div className="home">
      <div className="hero">
        <h1>Artsy!</h1>
        <button className="explore-btn" onClick={handleClick}>
          Explore
        </button>
      </div>
      <div className="description">
        <p>
          Fully imerse youself in a curated collection of art from the acclaimed
          Art institute of Chicago, and bring out the <em>Artsy</em> in you.
          Whether you&apos;re a seasoned art lover, or just starting to explore,
          we have something for everyone.
        </p>
      </div>
      <div className="acreditation">
        <p>powered by</p>
        <img src="/art_gallery.svg" alt="the art institute of chicago" />
      </div>
    </div>
  );
}

export default Home;
