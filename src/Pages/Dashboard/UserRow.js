import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, _id,role } = user;

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to remove user?");

    if (proceed) {
      console.log("Deleting user with id", id);
      const url = `http://localhost:5000/user/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = user.filter((user) => user._id !== id);
          }
        });
    }
  };

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button onClick={() => handleUserDelete(_id)} className="btn btn-xs">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
