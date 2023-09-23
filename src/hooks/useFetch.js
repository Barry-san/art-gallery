import { useState, useEffect } from "react";

export function useFetch(endpoint) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const result = fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "AIC-User-Agent": "no-name-yet (oyeyemimubarak6@gmail.com)",
      },
    });
    result
      .then((res) => {
        setLoading(false);
        res.json().then(setData);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [endpoint]);
  return { data, error, loading };
}
