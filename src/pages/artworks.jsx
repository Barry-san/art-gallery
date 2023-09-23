import Error from "../components/error";
import Loader from "../components/loader";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Artworks() {
  const { data, error, loading } = useFetch("/artworks");
  return (
    <div className="artworks">
      {error && <Error />}
      {loading ? <Loader /> : null}
      <div className="grid">
        {data?.data.map((elem) => {
          return (
            <div className="flex" key={elem.id}>
              <Link to={`${elem.id}`}>
                <img
                  srcSet={`
                https://www.artic.edu/iiif/2/${elem.image_id}/full/600,/0/default.jpg 1200w,
                https://www.artic.edu/iiif/2/${elem.image_id}/full/400,/0/default.jpg 820w,
                        https://www.artic.edu/iiif/2/${elem.image_id}/full/200,/0/default.jpg 400w`}
                  src={`https://www.artic.edu/iiif/2/${elem.image_id}/full/400,/0/default.jpg`}
                  alt={elem.title}
                />
                <div>
                  <div className="art_box">
                    <p className="title">
                      {elem.title}
                      {elem.artist_title && (
                        <span className="artist_name">
                          {" "}
                          - {elem.artist_title}
                        </span>
                      )}
                    </p>
                    <p className="category"> {elem.artwork_type_title}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Artworks;
