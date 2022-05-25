import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

    const handleUserDelete = (id) => {

      fetch(`http://localhost:5000/order/${id}`, {
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
                        Not Paid
                      </button>
                    </Link>
                  )}
                  {a.totalprice && a.paid === "false" && (
                    <button className="btn btn-xs btn-success">Panding</button>
                  )}
                  {a.totalprice && a.paid === "true" && (
                    <div>
                      <p>
                        <span className="text-success">Panding</span>
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
                    disabled={a.totalprice && a.paid}
                    htmlFor="booking-modal"
                    class="btn btn-xs text-white"
                  >
                    Cancel
                  </label>
                </td>

                <input
                  type="checkbox"
                  id="booking-modal"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">
                      Are you sure you want to delete ${a.part_name}!
                    </h3>
                    <div className="modal-action">
                      <label
                        onClick={() => handleUserDelete(a._id)}
                        htmlFor="booking-modal"
                        className="btn btn-xs btn-error"
                      >
                        Delete
                      </label>
                      <label htmlFor="booking-modal" className="btn btn-xs">
                        Cancel
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