import React from "react";

const ManageModal = ({ product, handleDelete }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-product"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete Parts?
          </h3>
          <div className="modal-action">
            <label
              onClick={() => handleDelete(product)}
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
    </div>
  );
};

export default ManageModal;