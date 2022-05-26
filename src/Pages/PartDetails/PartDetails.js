import React, { useState } from "react";
import { useParams } from "react-router-dom";
import usePart from "../../hooks/usePart";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const PartDetails = () => {
  const { partId } = useParams();
  const [part] = usePart(partId);
  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const price = part.price;
    const minquantity = part.minimum_quantity;
    const availablequantity = part.available_quantity;

    if (
      parseInt(data.quantity) < minquantity ||
      parseInt(data.quantity) > availablequantity
    ) {
      toast.error(
        `Minimum order ${minquantity} pieces and Maximimum order ${availablequantity} pieces`
      );
    } else {
      const totalprice = parseInt(data.quantity) * price;
      const order = {
        displayName: user.displayName,
        part_name: part.name,
        email: user.email,
        Address: data.address,
        number: data.phone,
        quantity: parseInt(data.quantity),
        totalprice: totalprice,
      };

      fetch("https://floating-inlet-46757.herokuapp.com/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((inserted) => {
          toast("Order Success");
        });
    }
  };

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
            </div>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-1">
          <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* ----name-------- */}
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  disabled
                  value={user?.displayName || ""}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs  mt-4">
                <input
                  type="text"
                  disabled
                  value={part.name}
                  className="input input-bordered w-full max-w-xs"
                  {...register("partname", {})}
                />
              </div>

              {/* -------email validation---- */}
              <div className="form-control w-full max-w-xs mt-4">
                <input
                  type="email"
                  disabled
                  value={user?.email || ""}
                  className="input input-bordered w-full max-w-xs"
                  {...register("email")}
                />
              </div>

              {/* ------address validation----- */}
              <div className="form-control w-full max-w-xs  mt-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full max-w-xs"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.address?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>

              {/* ------phone validation----- */}
              <div className="form-control w-full max-w-xs  mt-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone is Required",
                    },
                    minLength: {
                      value: 11,
                      message: "Must be 11 digit or longer",
                    },
                  })}
                />

                <label className="label">
                  {errors.phone?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                  {errors.phone?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>

              {/* ------Quantity validation----- */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>

                <input
                  type="number"
                  placeholder={`Minimum ${part.minimum_quantity} and Available ${part.available_quantity} Quantity`}
                  className="input input-bordered w-full max-w-xs"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Quantity is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.quantity?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="ORDER"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartDetails;
