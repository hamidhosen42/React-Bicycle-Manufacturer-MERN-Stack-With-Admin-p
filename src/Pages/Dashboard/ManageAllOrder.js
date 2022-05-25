import React, { useState } from "react";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";

const ManageAllOrder = () => {

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/orders").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-3">
      {/* <h2 className="text-2xl pb-3">Manage Doctors: {doctors.length}</h2> */}
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
              <tr>
                <th>{index + 1}</th>
                <th>{order.displayName}</th>
                <td>{order.part_name}</td>
                <td>{order.quantity}</td>
                <td>{order.totalprice}</td>
                <td>{order.paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrder;
