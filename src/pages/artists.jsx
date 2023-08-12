import { useFetch } from "../hooks/useFetch";

function Artists() {
  const { data, error, loading } = useFetch("agents");
  {
  }
  return (
    <div className="artists">
      {data?.data.map((elem) => {
        console.log(elem);
        return (
          <div className="flex" key={elem.id}>
            <p>{elem.title}</p>
            <p>
              {elem.birth_date}-{elem.death_date}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Artists;
