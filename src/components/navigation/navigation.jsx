import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      logo
      <div className="navlinks">
        <Link to={"/artworks"}>Artworks</Link>
        <Link to={"/exhibitions"}>Exhibitions</Link>
        <Link to={"/artists"}>Artists</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </nav>
  );
}

export default Navigation;
