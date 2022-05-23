import React from "react";

const InfoCard = ({ img, cardTitle, bgClass, cardDetails }) => {
  return (
    <div
      className={`py-5 card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary`}
    >
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDetails}</p>
      </div>
    </div>
  );
};

export default InfoCard;
