import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import { Spinner } from "reactstrap";

function ProtectedPage() {
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [api]);

  if (loading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <div>{res}</div>;
}

export default ProtectedPage;
