import "../App.css";
import Home from "../pages/home";
import Navigation from "./navigation/navigation";
import Artworks from "../pages/artworks";
import Exhibitions from "../pages/exhibitons";
import Artists from "../pages/artists";
import About from "../pages/about";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import Details from "../pages/details";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/artworks"} element={<Artworks />}></Route>
        <Route path={"/artworks/:id"} element={<Details></Details>} />
        <Route path={"/exhibitions"} element={<Exhibitions />} />
        <Route path={"/artists"} element={<Artists />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
