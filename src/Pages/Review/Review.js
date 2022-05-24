import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";

const Review = (props) => {
  const { name, img, rating,  details_review} =
    props.review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" className="rounded-xl img-height" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title text-start">Name:{name}</h2>
        <p className="text-center">
          <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
          ></Rating>
        </p>
        <p>
          {details_review}
        </p>
      </div>
    </div>
  );
};

export default Review;