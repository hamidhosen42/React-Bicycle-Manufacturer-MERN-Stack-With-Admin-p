import React, { useState } from "react";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const ManageAllOrder = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/orders").then((res) => res.json())
  );

  const handleShiped = (id, paid) => {

    fetch(`http://localhost:5000/shiped/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ paid }),
    })
      .then((res) => res.json())
      .then((inserted) => {
        toast("Payment update Success");
        refetch();
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-3">
      <h2 className="text-2xl pb-3">Manage All Order: {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Person Name</th>
              <th>Parts Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>{order.displayName}</th>
                <td>{order.part_name}</td>
                <td>{order.quantity}</td>
                <td>{order.totalprice}</td>
                <td>
                  {order.paid === "true" && (
                    <button className="btn btn-xs btn-success">Paid</button>
                  )}
                  {order.paid === "false" && (
                    <button
                      onClick={() => handleShiped(order._id, order.paid)}
                      className="btn btn-xs 
                    btn-success"
                    >
                      shipped now
                    </button>
                  )}
                  {!order.paid && (
                    <button className="btn btn-xs btn-success">Unpaind</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrder;