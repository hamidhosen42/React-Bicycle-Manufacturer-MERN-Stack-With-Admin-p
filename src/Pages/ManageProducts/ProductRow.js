import React from "react";

const ProductRow = ({ parts, index, refetch, setProduct }) => {
  const { _id, name, minimum_quantity, available_quantity, price } =
    parts[index];

  return (
    <tr ke={index}>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{minimum_quantity}</td>
      <td>{available_quantity}</td>
      <td>{price} (per unit)</td>
      <td>
        <label
          onClick={() => setProduct(_id)}
          htmlFor="delete-confirm-product"
          className="btn btn-xs btn-error"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;