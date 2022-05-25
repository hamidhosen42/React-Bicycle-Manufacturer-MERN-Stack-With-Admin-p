import React from "react";
import { toast } from "react-toastify";

const ProductRow = ({ parts, index, refetch, setDeletingProduct }) => {
  const { _id, name, minimum_quantity, available_quantity, price } =
    parts[index];

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/part/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Product: ${name} is deleted.`);
          refetch();
        }
      });
  };

  return (
    <tr ke={index}>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{minimum_quantity}</td>
      <td>{available_quantity}</td>
      <td>{price} (per unit)</td>
      <td>
        <label
          htmlFor="delete-confirm-product"
          className="btn btn-xs btn-error"
        >
          Cancel
        </label>
      </td>

      <input
        type="checkbox"
        id="delete-confirm-product"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete ${name}!
          </h3>
          <div className="modal-action">
            <label
              onClick={() => handleDelete(_id)}
              htmlFor="delete-confirm-product"
              className="btn btn-xs btn-error"
            >
              Delete
            </label>
            <label htmlFor="delete-confirm-product" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </tr>
  );
};

export default ProductRow;