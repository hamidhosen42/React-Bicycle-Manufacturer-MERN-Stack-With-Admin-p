import React from "react";
import hamid from "../../assets/hamid.jpeg";

const Portfolio = () => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl m-10">
      <figure className="lg:w-96 md:w-full sm:w-full">
        <img src={hamid} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Md.Hamid Hosen</h2>
        <p>Email:hamidhosen6403@gmail.com</p>
        <p>East Delta University,Chittagong</p>
        <p>Department of Computer Science and Engineering</p>
        <p>List of technical skills: Programming,Flutter app devlopment.</p>
        <h3 className="font-bold">PROJECT:</h3>
        <a
          target="_blank"
          href="
          https://fruits-warehouse-client-site.web.app"
          className="text-success"
        >
          Fruits-warehouse
        </a>
        <a
          target="_blank"
          href="
          https://react-route-product-analysis-websites.netlify.app"
          className="text-success"
        >
          Product Analysis
        </a>
        <a
          target="_blank"
          href="
          https://github.com/hamidhosen42/quran_flutter_app_ui"
          className="text-success"
        >
          Quran App
        </a>
      </div>
    </div>
  );
};

export default Portfolio;