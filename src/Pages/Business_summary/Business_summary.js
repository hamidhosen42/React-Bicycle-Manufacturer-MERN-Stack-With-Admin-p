import React from "react";
import customer from "../../assets/Business/customer.png";
import revenue from "../../assets/Business/revenue.png";
import tools from "../../assets/Business/tools.jpg";
import review from "../../assets/Business/review.png";

const Business_summary = () => {
  return (
    <div className="card shadow p-11 bg-base-200">
      <h1 className=" pt-10 font-bold text-center text-2xl text-teal-500">
        BUISINESS SUMMARY
      </h1>
      <div class="m-11 stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat p-11">
          <div class="stat-figure text-secondary">
            <img className="w-20" src={customer} alt="" srcset="" />
          </div>
          <div class="stat-value">100+</div>
          <div class="stat-title text-teal-500 text-xl">Customers</div>
        </div>
        <div class="stat  p-11">
          <div class="stat-figure text-secondary">
            <img className="w-20" src={revenue} alt="" srcset="" />
          </div>
          <div class="stat-value">120M+</div>
          <div class="stat-title text-teal-500 text-xl">Annual Revenue</div>
        </div>
        <div class="stat  p-11">
          <div class="stat-figure text-secondary">
            <img className="w-20" src={review} alt="" srcset="" />
          </div>
          <div class="stat-value">33K+</div>
          <div class="stat-title text-teal-500 text-xl">Reviews</div>
        </div>
        <div class="stat  p-11">
          <div class="stat-figure text-secondary">
            <img className="w-20" src={tools} alt="" srcset="" />
          </div>
          <div class="stat-value">50+</div>
          <div class="stat-title text-teal-500 text-xl">Tools</div>
        </div>
      </div>
    </div>
  );
};

export default Business_summary;