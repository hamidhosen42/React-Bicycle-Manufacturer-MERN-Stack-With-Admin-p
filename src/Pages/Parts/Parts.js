import React from "react";
import Part from "../Part/Part";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Parts = () => {
  const { data: parts, isLoading } = useQuery("part", () =>
    fetch("https://floating-inlet-46757.herokuapp.com/part").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="px-12 bg-base-200 pb-10">
      <h1 className="pb-10 font-bold text-center text-2xl text-teal-500 pt-5 ">
        BYCYCLE PARTS
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {parts.slice(-6).map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
