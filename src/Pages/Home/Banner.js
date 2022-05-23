import React from "react";
import cycle1 from "../../assets/images/banner1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop>
        <div id="slide1" class="carousel-item relative w-full">
          <img src={cycle1} class="w-full" alt="" />
        </div>
        <div id="slide1" class="carousel-item relative w-full">
          <img src={cycle1} class="w-full" alt="" />
        </div>
        <div id="slide1" class="carousel-item relative w-full">
          <img src={cycle1} class="w-full" alt="" />
        </div>
        <div id="slide1" class="carousel-item relative w-full">
          <img src={cycle1} class="w-full" alt="" />
        </div>
        <div id="slide1" class="carousel-item relative w-full">
          <img src={cycle1} class="w-full" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;