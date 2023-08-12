import Loader from "../components/loader";
import { useFetch } from "../hooks/useFetch";

function Artworks() {
  const { data, error, loading } = useFetch("artworks");
  return (
    <div className="artworks">
      {error && console.log(error)}
      {loading ? <Loader /> : null}
      {data && console.log(data)}
      <div className="grid">
        {data?.data.map((elem) => {
          return (
            <div className="flex" key={elem.id}>
              <img
                src={`https://www.artic.edu/iiif/2/${elem.image_id}/full/400,/0/default.jpg`}
                alt={elem.title}
              />
              <p>
                {elem.title} - {elem.artwork_type_title}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Artworks;
