import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Error from "../components/error";
import Loader from "../components/loader";

function Details({ param }) {
  const { id } = useParams();
  console.log(id);
  const { data, error, loading } = useFetch(`artworks/${id}`);
  return (
    <div>
      {loading && <Loader />}
      {data && console.log(data)}
      {error && <Error />}
      <h1>Art id = {param}</h1>
    </div>
  );
}

export default Details;
