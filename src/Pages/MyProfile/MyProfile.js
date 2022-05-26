import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("profile", () =>
    fetch(`http://localhost:5000/profile/${user.email}`).then((res) =>
      res.json()
    )
  );

  console.log(users);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
    const profile = {
      displayName: user.displayName,
      email: user.email,
      education: data.education,
      address: data.address,
      number: data.phone,
      linkdin: data.linkdin,
    };

    fetch(`http://localhost:5000/profile/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((inserted) => {
        toast("Profile update Success");
        refetch();
      });
  };

  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left p-10">
          <div className="card lg:max-w-lg bg-base-100 w-full shadow-xl">
            <div className="card-body items-start ">
              <h2 className="card-title text-start">Name:{user.displayName}</h2>
              <h4 className="card-title text-start">Email:{user.email}</h4>
              <p>Education : {users.education}</p>
              <p>Address : {users.address}</p>
              <p>Phone No : {users.number}</p>
              <p>
                Linkdin Link :{" "}
                {
                  <a
                    className="text-success"
                    target="_blank"
                    href={users.linkdin}
                  >
                    Linkdin Profile
                  </a>
                }
              </p>
            </div>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-1">
          <div class="card-body">
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

              <div className="form-control w-full max-w-xs  mt-4">
                <input
                  type="text"
                  placeholder="Education"
                  className="input input-bordered w-full max-w-xs"
                  {...register("education", {
                    required: {
                      value: true,
                      message: "education is Required",
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

              <div className="form-control w-full max-w-xs">
                <input
                  type="link"
                  placeholder="Linkdin Link"
                  className="input input-bordered w-full max-w-xs"
                  {...register("linkdin", {
                    required: {
                      value: true,
                      message: "linkdin is Required",
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
                value="UPDATE profile"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;