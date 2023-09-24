import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Error from "../components/error";
import Loader from "../components/loader";

function Details() {
  const location = useLocation();
  const { data, error, loading } = useFetch(location.pathname);
  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {data && console.log(data)}
      {data && (
        <div className="details">
          <img
            src={`${data.config.iiif_url}/${data.data.image_id}/full/843,/0/default.jpg`}
            alt={data.data.thumbnail?.alt_text}
          />
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
            <p dangerouslySetInnerHTML={{ __html: data.data.description }}></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
