import axios from "axios";
import { useState, useEffect } from "react";

export default function useAxios({ url, method, massage = {} }) {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    switch (method.toUpperCase()) {
      case "GET":
        setLoading(true)
        axios
          .get(url)
          .then((res) => {
            setResponse(res.data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
        break;

      default:
        break;
    }  
  }, [url]);
  return {response, loading, error};
}
