import Loader from "../components/loader";
import { useFetch } from "../hooks/useFetch";

function Artists() {
  const { data, error, loading } = useFetch("agents");

  return (
    <div className="artists">
      {loading && <Loader />}
      {error && <Error />}
      {data?.data.map((elem) => {
        return (
          <div className="flex" key={elem.id}>
            <p>{elem.title}</p>
            <p className="birth">Born : {elem.birth_date}</p>
            {elem.death_date && <p> Died : {elem.death_date}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Artists;
