import React from "react";

const OrderModel = ({ myorder, handleUserDelete }) => {

  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete order?
          </h3>
          <div className="modal-action">
            <label
              onClick={() => handleUserDelete(myorder)}
              htmlFor="order-modal"
              className="btn btn-xs btn-error"
            >
              Delete
            </label>
            <label htmlFor="order-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModel;