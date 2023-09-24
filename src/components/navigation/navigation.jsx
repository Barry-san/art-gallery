import { Link } from "react-router-dom";
import { navigation } from "../../utils/DOM/menu";

function Navigation() {
  return (
    <nav>
      <Link to={"/"}>
        <span className="logo">Artsy</span>
      </Link>
      <button
        aria-label="navigation toggle"
        className="navToggle"
        onClick={navigation}
      >
        <span className="">Menu</span>
      </button>
      <div className="navlinks" aria-expanded="false" onBlur={navigation}>
        <Link to={"/artworks"}>Artworks</Link>
        <Link to={"/exhibitions"}>Exhibitions</Link>
        {/* <Link to={"/artists"}>Artists</Link> */}
        <Link to={"/about"}>About</Link>
      </div>
    </nav>
  );
}

export default Navigation;
