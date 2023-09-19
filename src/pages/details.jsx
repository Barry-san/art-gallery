import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Error from "../components/error";
import Loader from "../components/loader";

function Details({ param }) {
  const { id } = useParams();
  const [{ data }, error, loading] = useFetch(`artworks/${id}`);
  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {data && (
        <div className="details">
          <img src="" alt={data.title} />
          <p>{data.title}</p>
          <p>{data.category}</p>
        </div>
      )}
    </div>
  );
}

export default Details;
