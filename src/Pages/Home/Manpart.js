import React from "react";
import man from "../../assets/images/man.jpg";
import women from "../../assets/images/women.jpg";

const Manpart = () => {
  return (
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div>
        <div
          class="hero min-h-screen"
          style={{
            background: `url(${man})`,
          }}
        >
          <div class="hero-overlay bg-opacity-20"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Road Bikes</h1>
              <h2 class="mb-5 text-2xl">Powerful and easy to use</h2>
              <button class="btn btn-primary">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="hero min-h-screen"
          style={{
            background: `url(${women})`,
          }}
        >
          <div class="hero-overlay bg-opacity-20"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Women’s bikes</h1>
              <h2 class="mb-5 text-2xl">Helping to inspire women in sport</h2>
              <button class="btn btn-primary">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manpart;