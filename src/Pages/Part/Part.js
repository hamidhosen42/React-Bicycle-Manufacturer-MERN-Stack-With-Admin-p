import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const {
    _id,
    name,
    minimum_quantity,
    available_quantity,
    price,
    description,
    img,
  } = part;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/part/${id}`);
  };
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow">
      <figure>
        <img src={img} alt="Shoes" className="rounded-xl img-height" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title text-start">Parts Name:{name}</h2>
        <p>Price : {price} (per unit)</p>
        <p>Minimum Quantity : {minimum_quantity}</p>
        <p>Available Quantity : {available_quantity}</p>
        <p className="text-justify mt-2">
          {description}
        </p>
        <button
          onClick={() => navigateToServiceDetail(_id)}
          className="btn btn-dark text-white"
        >
          PURCHASE
        </button>
      </div>
    </div>
  );
};

export default Part;