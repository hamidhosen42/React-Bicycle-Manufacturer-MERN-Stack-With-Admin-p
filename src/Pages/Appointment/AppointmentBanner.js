import React from "react";
import bgChair from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen">
      <img src={bgChair} className="mt-[-100px]" alt="" />
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl w-50 ml-10"
          alt="Dentice Chair"
        />
        <div className="">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
