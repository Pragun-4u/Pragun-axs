import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  brandColor,
  inputBaseClasses,
  selectClasses,
  EyeIcon,
  EyeOffIcon,
  InfoIcon,
  ChevronDownIcon,
} from "../constants/styleConstant";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import signupImg from "/signup.jpg";
import useToast from "../components/Toast";
import httpClient from "../api/httpClient";

const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^\d{10}$/, "Must be 10 digits"),
  username: Yup.string()
    .email("Invalid username")
    .required("Username is required"),
  nationality: Yup.string().required("Nationality is required"),
  dob: Yup.string().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  occupation: Yup.string().required("Occupation is required"),
  experience: Yup.string().required("Experience is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain uppercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[!@#$%^&*]/, "Must contain a special character"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const SignUp = () => {
  const { showToast } = useToast();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (data) => {
    try {
      const res = await httpClient.post("/signup", data);

      localStorage.setItem("token", res?.response?.token);
      localStorage.setItem("user", res?.response?.user?.userName);
      showToast("success", "Signed up successfully");
      setTimeout(() => {
        navigate("/");
        showToast("success", "Logged in successfully");
      }, 1000);
    } catch (error) {
      console.log({ error });
      showToast("error", error?.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <div className="hidden lg:block w-1/2 bg-cover bg-center relative h-screen">
        <img
          loading="eager"
          src={signupImg}
          className="h-[100vh] w-full object-cover"
          alt="Signup"
        />
      </div>

      <div className="w-full h-screen overflow-y-auto lg:w-1/2 flex bg-gray-300/30 items-center justify-center py-4 px-6 sm:px-12 lg:px-16 ">
        <div className="max-w-lg w-full h-full">
          <header className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-serif" style={{ color: brandColor }}>
              Welcome to <span className="font-bold">ABC</span>
            </h1>
            <p className="text-gray-500 mt-2">
              Where Financial Wisdom Meets Technology
            </p>
          </header>

          <main>
            <h2
              className="text-2xl font-bold mb-8 text-center lg:text-left"
              style={{ color: brandColor }}
            >
              Sign up
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-5 sm:space-y-0">
                <div className="sm:w-1/2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className={inputBaseClasses}
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-xs">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="sm:w-1/2">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={inputBaseClasses}
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-xs">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className={inputBaseClasses}
                  {...register("mobile")}
                />
                {errors.mobile && (
                  <p className="text-red-600 text-xs">
                    {errors.mobile.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Username"
                  className={inputBaseClasses}
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-red-600 text-xs">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <select
                  {...register("nationality")}
                  defaultValue=""
                  className={selectClasses}
                >
                  <option value="" disabled>
                    Nationality
                  </option>
                  <option value="usa">United States</option>
                  <option value="can">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="india">India</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                {errors.nationality && (
                  <p className="text-red-600 text-xs">
                    {errors.nationality.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="date"
                  placeholder="DD-MM-YYYY"
                  className={inputBaseClasses}
                  {...register("dob")}
                />
                {errors.dob && (
                  <p className="text-red-600 text-xs">{errors.dob.message}</p>
                )}
              </div>

              <div className="relative">
                <select
                  {...register("gender")}
                  defaultValue=""
                  className={selectClasses}
                >
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                {errors.gender && (
                  <p className="text-red-600 text-xs">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <select
                  {...register("occupation")}
                  defaultValue=""
                  className={selectClasses}
                >
                  <option value="" disabled>
                    Please select occupation
                  </option>
                  <option value="dev">Developer</option>
                  <option value="des">Designer</option>
                  <option value="pm">Project Manager</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                {errors.occupation && (
                  <p className="text-red-600 text-xs">
                    {errors.occupation.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <select
                  {...register("experience")}
                  defaultValue=""
                  className={selectClasses}
                >
                  <option value="" disabled>
                    Please select years of experience
                  </option>
                  <option value="0-2">0-2 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                {errors.experience && (
                  <p className="text-red-600 text-xs">
                    {errors.experience.message}
                  </p>
                )}
              </div>

              <input
                type="url"
                placeholder="Website (Optional)"
                className={inputBaseClasses}
                {...register("website")}
              />

              <div>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                    className={inputBaseClasses}
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {passwordVisible ? (
                      <EyeOffIcon className="w-5 h-5 cursor-pointer" />
                    ) : (
                      <EyeIcon className="w-5 h-5 cursor-pointer" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-2">
                  <InfoIcon
                    className="w-4 h-4 mr-2.5 cursor-pointer"
                    style={{ color: brandColor }}
                  />
                  Between 8 and 20 characters, 1 upper case letter, 1 or more
                  numbers, 1 or more special characters
                </p>
                {errors.password && (
                  <p className="text-red-600 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  type={rePasswordVisible ? "text" : "password"}
                  placeholder="Re-enter password"
                  className={inputBaseClasses}
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  onClick={() => setRePasswordVisible(!rePasswordVisible)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {rePasswordVisible ? (
                    <EyeOffIcon className="w-5 h-5 cursor-pointer" />
                  ) : (
                    <EyeIcon className="w-5 h-5 cursor-pointer" />
                  )}
                </button>
                {errors.confirmPassword && (
                  <p className="text-red-600 text-xs">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white font-bold py-3 px-4 rounded-lg transition-colors cursor-pointer"
                style={{
                  backgroundColor: brandColor,
                  hover: { backgroundColor: "#0a1f3d" },
                }}
              >
                Create account
              </button>
            </form>
          </main>

          <footer className="my-8 text-center text-sm pb-4 text-gray-500">
            <p>
              By creating account you agree to our{" "}
              <a
                href="#"
                className="font-semibold"
                style={{ color: brandColor }}
              >
                Terms & Policies
              </a>
            </p>
            <p className="mt-2">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-semibold"
                style={{ color: brandColor }}
              >
                Log In
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
