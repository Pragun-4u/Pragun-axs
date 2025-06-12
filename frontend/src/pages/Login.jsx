import { useState } from "react";
import {
  brandColor,
  EyeIcon,
  EyeOffIcon,
  inputBaseClasses,
} from "../constants/styleConstant";
import signupImg from "/signup.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import httpClient from "../api/httpClient.js";
import useToast from "../components/Toast.jsx";
import { useAuth } from "../context/AuthContext";
const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/[A-Z]/, "Must contain uppercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[!@#$%^&*]/, "Must contain a special character"),
});

const Login = () => {
  const { showToast } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await httpClient.post("/login", data);

      login(res?.response?.token);
      localStorage.setItem("user", res?.response?.user?.userName);
      showToast("success", "Logged in successfully");
      setTimeout(() => navigate("/"), 1000);
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

      <div className="w-full h-[100vh] lg:w-1/2 flex items-center bg-gray-300/30 justify-center py-12 px-6 sm:px-12 lg:px-16">
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
              Log in with your credentials
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Username"
                    className={inputBaseClasses}
                    {...register("username")}
                  />
                  {errors.username && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter password"
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
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.password.message}
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

          <footer className="mt-8 text-center text-sm text-gray-500">
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
              New to ABC?{" "}
              <Link
                to={"/signup"}
                className="font-semibold"
                style={{ color: brandColor }}
              >
                Sign up
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
