import { useEffect, useState } from "react";

const usePart = (partId) => {
  const [part, setPart] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/part/${partId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [partId]);
  return [part, setPart];
};

export default usePart;