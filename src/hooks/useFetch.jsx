import { useState, useEffect } from "react";

const useFetch = (url) => {
  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsPending(true);
        const response = await fetch(url);
        if (!response.ok) {
          setIsPending(false);
          setError(
            `Couldn't fetch the API ERROR: ${response.status} ${response.statusText}`
          );
          throw new Error(
            `Couldn't fetch the API : ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setIsPending(false);
        setData(data);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
