import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "b322e906e4395f8164d3664316fe1b6b";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const profile = {
            email: user.email,
            name: data.name,
            price: data.price,
            minimum_quantity: data.quantity,
            available_quantity: data.available,
            description: data.description,
            img: img,
          };

          console.log(profile);
          // send to your database
          fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(profile),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add the Product");
              }
            });
        }
      });
  };

  return (
    <div className="mb-20 mt-11 flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl">Add a New Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs mt-4">
              <input
                type="email"
                disabled
                value={user?.email || ""}
                className="input input-bordered w-full max-w-xs"
                {...register("email")}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-4">
              <input
                type="text"
                placeholder="Parts Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/* ------price validation----- */}
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Price (Per unit)"
                className="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Required",
                  },
                })}
              />

              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>

            {/* ------Minimum Quantity----- */}
            <div className="form-control w-full max-w-xs">
              <input
                type="number"
                placeholder="Minimum Quantity"
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

            {/* ------Available Quantity----- */}
            <div className="form-control w-full max-w-xs">
              <input
                type="number"
                placeholder="Available Quantity"
                className="input input-bordered w-full max-w-xs"
                {...register("available", {
                  required: {
                    value: true,
                    message: "Available is Required",
                  },
                })}
              />

              <label className="label">
                {errors.available?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.available.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs ">
              <input
                type="description"
                placeholder="Description"
                className="input input-bordered w-full max-w-xs"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
              />

              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="input input-bordered pt-1.5 w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;