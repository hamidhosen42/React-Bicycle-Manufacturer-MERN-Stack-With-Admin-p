import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import OrderModel from "./OrderModel";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [orders, setOrder] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [myorder, setMyOrder] = useState(null);
  const navigate = useNavigate();

  const handleUserDelete = (id) => {
    fetch(`https://floating-inlet-46757.herokuapp.com/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = user.filter((user) => user._id !== id);
          setOrder(remaining);
          toast.success("Order is deleted.");
        }
      });
  };

  useEffect(() => {
    if (user) {
      fetch(
        `https://floating-inlet-46757.herokuapp.com/order?orderEmail=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setOrder(data));
    }
  }, [user, navigate, orders]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-3">
      <h2 className="pb-3">Total My Order: {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Part Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow
                key={order._id}
                index={index}
                order={order}
                setMyOrder={setMyOrder}
              ></OrderRow>
            ))}
          </tbody>
          {myorder && (
            <OrderModel
              myorder={myorder}
              setMyOrder={setMyOrder}
              handleUserDelete={handleUserDelete}
            ></OrderModel>
          )}
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
