import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ProductRow from "./ProductRow";

const ManageProducts = () => {

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("part", () =>
    fetch("http://localhost:5000/part").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-3">
      <h2 className="pb-3">Total Manage Product: {parts.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Part Name</th>
              <th>Minimum Quantity</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((a, index) => (
              <ProductRow
                key={a._id}
                parts={parts}
                index={index}
                refetch={refetch}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;