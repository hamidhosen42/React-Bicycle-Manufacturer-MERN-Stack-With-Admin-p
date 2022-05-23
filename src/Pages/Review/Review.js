import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";

const Review = (props) => {
  const { name, img, rating, sort_details, details_review, date } =
    props.review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl img-height" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name:{name}</h2>
        <p>
          {sort_details.slice(0, 35)
            ? sort_details.slice(0, 35) + "..."
            : sort_details}
        </p>
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
          {details_review.slice(0, 90)
            ? details_review.slice(0, 90) + "...."
            : details_review}
        </p>
      </div>
    </div>
  );
};

export default Review;