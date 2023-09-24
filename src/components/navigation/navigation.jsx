import { Link } from "react-router-dom";
import { navigation, handleClose } from "../../utils/DOM/menu";

function Navigation() {
  return (
    <nav onBlur={handleClose}>
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
      <div className="navlinks" aria-expanded="false">
        <Link to={"/artworks"}>Artworks</Link>
        <Link to={"/exhibitions"}>Exhibitions</Link>
        {/* <Link to={"/artists"}>Artists</Link> */}
        <Link to={"/about"}>About</Link>
      </div>
    </nav>
  );
}

export default Navigation;
