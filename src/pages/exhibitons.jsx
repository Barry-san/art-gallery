import Loader from "../components/loader";
import { useFetch } from "../hooks/useFetch";

function Exhibitions() {
  const { data, error, loading } = useFetch("exhibitions");
  return (
    <div className="artworks">
      {error && console.log(error)}
      {loading && <Loader />}
      <div className="grid">
        {data?.data.map((elem) => {
          return (
            <div className="flex" key={elem.id}>
              <img
                src={
                  elem.image_url
                    ? elem.image_url
                    : `https://www.artic.edu/iiif/2/${elem.image_id}/full/400,/0/default.jpg
`
                }
                alt={elem.title}
              />
              <p key={elem.id}>
                {elem.title} - {elem.artwork_type_title}
              </p>
              {elem.short_description}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exhibitions;
