import React, { useEffect, useState } from "react";
import Part from "../Part/Part";

const Parts = () => {
    const [parts, setparts] = useState([]);

    useEffect(() => {
      fetch("tools.json")
        .then((res) => res.json())
        .then((data) => setparts(data));
    }, []);

    return (
      <div className="my-28 px-12">
        <h1 className="pb-10 font-bold text-center text-2xl text-teal-500 pt-5 ">
          PARTS
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {parts.map((part) => (
            <Part key={part._id} part={part}></Part>
          ))}
        </div>
      </div>
    );
};

export default Parts;