import { Routes, Route } from "react-router-dom";
import About from "../ui/about";
import Navigation from "./navigation/navigation";
import Home from "../pages/home";
import "../App.css";
import Artworks from "../pages/artworks";
import NotFound from "./NotFound";
import Exhibitions from "../pages/exhibitons";
import Artists from "../pages/artists";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/artworks"} element={<Artworks />} />
        <Route path={"/exhibitions"} element={<Exhibitions />} />
        <Route path={"/artists"} element={<Artists />} />
        <Route path={"/*"} element={<NotFound />} />
        {/* <Route>
          {loading ? <p>pretend this is a proper loader</p> : ""}
          <div className="grid">
            {data?.data.map((elem) => {
              console.log(elem.short_description);
              return (
                <div className="flex" key={elem.id}>
                  <img
                    src={
                      elem.image_url
                         ? elem.image_url
                        : `https://www.artic.edu/iiif/2/${elem.image_id}/full/843,/0/default.jpg
`
                    }
                    alt={elem.title}
                  />
                  <p key={elem.id}>
                    {elem.title} - {elem.artwork_type_title}{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
