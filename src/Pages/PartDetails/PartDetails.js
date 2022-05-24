import React from 'react';
import {useParams } from "react-router-dom";
import usePart from '../../hooks/usePart';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const PartDetails = () => {
   const { partId} = useParams();
   const [part]=usePart(partId);
   const [user] = useAuthState(auth);

    return (
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left p-10">
            <div className="card lg:max-w-lg bg-base-100 w-full shadow-xl">
              <figure>
                <img
                  src={part.img}
                  alt="Shoes"
                  className="rounded-xl img-height"
                />
              </figure>
              <div className="card-body items-center ">
                <h2 className="card-title text-start">Name:{part.name}</h2>
                <p>Price : {part.price} (per unit)</p>
                <p>Minimum Quantity : {part.minimum_quantity}</p>
                <p>Available Quantity : {part.available_quantity}</p>
                <p className="text-justify">{part.description}</p>
                <button className="btn btn-primary">PURCHASE</button>
              </div>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-11">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  disabled
                  value={user?.displayName || ""}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  disabled
                  value={user?.email || ""}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">ORDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PartDetails;