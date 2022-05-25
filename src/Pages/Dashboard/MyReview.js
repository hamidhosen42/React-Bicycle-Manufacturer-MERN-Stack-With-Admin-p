import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyReview = () => {
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
          const review = {
            displayName: user.displayName,
            email: user.email,
            rating: data.rating,
            details_review: data.description,
            img: img,
          };
          // send to your database
          fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add the doctor");
              }
            });
        }
      });
  };

  return (
    <div className="mb-20 flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl">Add a Review</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                disabled
                value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs"
              />
            </div>

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
                type="number"
                placeholder="Rating"
                className="input input-bordered w-full max-w-xs"
                {...register("rating", {
                  required: {
                    value: true,
                    message: "Rating is Required",
                  },
                })}
              />

              <label className="label">
                {errors.rating?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.rating.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs mt-4">
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

export default MyReview;