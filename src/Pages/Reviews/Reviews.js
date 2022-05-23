import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="my-28 px-12">
      <div id="customer" className="reviews-color" >
        <h1 className="font-bold text-center text-2xl text-teal-500 pt-5 ">
          CUSTOMER REVIEW
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <Review review={review} key={review.id}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
