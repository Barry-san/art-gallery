import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useQueryFetch = (endpoint) => {
  return useQuery([`query${endpoint}`], () =>
    fetch(import.meta.env.VITE_BASE_URL + "/" + endpoint)
  );
};

export default useQueryFetch;
