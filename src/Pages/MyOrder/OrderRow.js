import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ index, order, setMyOrder }) => {
  const { _id, part_name, quantity, totalprice, paid, transactionId } = order;
  return (
    <tr ke={index}>
      <th>{index + 1}</th>
      <td>{part_name}</td>
      <td>{quantity}</td>
      <td>{totalprice}</td>
      <td>
        {totalprice && !paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-xs btn-success">Not Paid</button>
          </Link>
        )}
        {totalprice && paid === "false" && (
          <button className="btn btn-xs btn-success">Panding</button>
        )}
        {totalprice && paid === "true" && (
          <div>
            <p>
              <span className="text-success">Paid</span>
            </p>
            <p>
              Transaction id:{" "}
              <span className="text-success">{transactionId}</span>
            </p>
          </div>
        )}
      </td>
      <td>
        <label
          onClick={() => setMyOrder(order._id)}
          disabled={totalprice && paid}
          htmlFor="order-modal"
          class="btn btn-xs text-white"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default OrderRow;