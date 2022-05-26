import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import ManageModal from "./ManageModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [product, setProduct] = useState(null);

  const handleDelete = (id) => {
    fetch(`https://floating-inlet-46757.herokuapp.com/part/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Parts is deleted.");
          refetch();
        }
      });
  };

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("part", () =>
    fetch("https://floating-inlet-46757.herokuapp.com/part").then((res) =>
      res.json()
    )
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
                setProduct={setProduct}
              ></ProductRow>
            ))}
          </tbody>
          {product && (
            <ManageModal
              product={product}
              setProduct={setProduct}
              handleDelete={handleDelete}
            ></ManageModal>
          )}
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
