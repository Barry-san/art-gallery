import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Error from "../components/error";
import Loader from "../components/loader";

function Details() {
  const location = useLocation();
  console.log(location.pathname);
  const { data, error, loading } = useFetch(location.pathname);
  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {data && (
        <div className="details">
          <div className="art_image">
            <img
              src={`${data.config.iiif_url}/${data.data.image_id}/full/600,/0/default.jpg`}
              alt={data.data.thumbnail?.alt_text}
            />
          </div>
          <div className="art_description">
            <h2 className="title">{data.data.title} </h2>
            <p className="author">{data.data.artist_title}</p>
            <div className="art_details">
              <p>
                <span className="">Category</span> : {data.data.category_titles}
              </p>
              <p>
                <span className="">Place of origin</span> :{" "}
                {data.data.place_of_origin}
              </p>
              <p>
                <span className="">Dimensions</span> : {data.data.dimensions}
              </p>
            </div>
            <div
              className="art_description"
              dangerouslySetInnerHTML={{ __html: data.data.description }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
