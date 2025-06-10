import { useState } from "react";
import {
  brandColor,
  EyeIcon,
  EyeOffIcon,
  inputBaseClasses,
} from "../constants/styleConstant";
import signupImg from "/signup.jpg";

import { Link } from "react-router";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

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

            <form className="space-y-5">
              <div>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                    className={inputBaseClasses}
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
              </div>

              <div className="relative">
                <input
                  type={rePasswordVisible ? "text" : "password"}
                  placeholder="Re-enter password"
                  className={inputBaseClasses}
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
