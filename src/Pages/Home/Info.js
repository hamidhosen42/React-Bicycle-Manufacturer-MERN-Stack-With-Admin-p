import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        cardTitle="Opening Hours"
        cardDetails="Lorem Ipsum is simply dummy text of the pri"
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Our Locations"
        cardDetails="Brooklyn, NY 10036, United States"
        bgclassName="bg-[#3A4256]"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        cardDetails="+000 123 456789"
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
