import { useEffect, useState } from "react";

const usePart = (partId) => {
  const [part, setPart] = useState({});

  useEffect(() => {
    const url = `https://floating-inlet-46757.herokuapp.com/part/${partId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [partId]);
  return [part, setPart];
};

export default usePart;
