import React from "react";
import Error from "../components/error";
import Loader from "../components/loader";
import { useFetch } from "../hooks/useFetch";

function Exhibitions() {
  const { data, error, loading } = useFetch("exhibitions");
  return (
    <div className="artworks">
      {error && <Error />}
      {loading && <Loader />}
      <div className="grid">
        {data?.data.map((elem) => {
          return (
            <div className="flex" key={elem.id}>
              {(elem.image_id || elem.image_url) && (
                <img
                  src={
                    elem.image_url
                      ? elem.image_url
                      : `https://www.artic.edu/iiif/2/${elem.image_id}/full/400,/0/default.jpg
`
                  }
                  alt={elem.title}
                />
              )}
              <div className="text-box">
                <p key={elem.id} className="title">
                  {elem.title}
                </p>
                <div>
                  <p>{elem.short_description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exhibitions;
