import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

    const handleUserDelete = (id) => {
      const proceed = window.confirm("Are you sure you want to delete??");

      if (proceed) {
        console.log("Deleting user with id", id);
        const url = `http://localhost:5000/order/${id}`;

        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = user.filter((user) => user._id !== id);
              setOrder(remaining);
            }
          });
      }
    };

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?orderEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
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
  }, [user, navigate]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-3">
      <h2 className="pb-3">Total My Order: {order.length}</h2>
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
            {order.map((a, index) => (
              <tr ke={index}>
                <th>{index + 1}</th>
                <td>{a.part_name}</td>
                <td>{a.quantity}</td>
                <td>{a.totalprice}</td>
                <td>
                  {a.totalprice && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success">
                        Not Pain
                      </button>
                    </Link>
                  )}
                  {a.totalprice && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => handleUserDelete(a._id)}
                    disabled={a.totalprice && a.paid}
                    // for="booking-modal"
                    class="btn btn-xs text-white"
                  >
                    Cancel
                  </label>
                </td>

                <input
                  type="checkbox"
                  id="booking-modal"
                  class="modal-toggle"
                />
                <div class="modal modal-bottom sm:modal-middle">
                  <div class="modal-box">
                    <h3 class="font-bold text-lg">
                      Congratulations random Interner user!
                    </h3>
                    <p class="py-4">
                      You've been selected for a chance to get one year of
                      subscription to use Wikipedia for free!
                    </p>
                    <div class="modal-action">
                      <label for="booking-modal" class="btn">
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;