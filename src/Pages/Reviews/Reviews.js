import React from "react";
import Review from "../Review/Review";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Reviews = () => {

    const { data: reviews, isLoading } = useQuery("reviews", () =>
      fetch("http://localhost:5000/review").then((res) => res.json())
    );

    if(isLoading)
    {
      return <Loading></Loading>
    }

  return (
    <div className="my-28 px-12">
      <h1 className="pb-10 font-bold text-center text-2xl text-teal-500 pt-5 ">
        CUSTOMER REVIEW
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review) => (
          <Review review={review} key={review.id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
