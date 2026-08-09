import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button, Input } from "../components/ui";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      alert(response.data.message || "Login successful!");

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login failed. Please check your email and password."
      );
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-slate-100 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      <div className="w-full max-w-6xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT PANEL */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-emerald-700 via-green-600 to-teal-700 text-white p-14">

          <img
            src="/logopahadinest.png"
            alt="PahadiNest Logo"
            className="w-44 mb-8 drop-shadow-xl"
          />

          <h1 className="text-5xl font-bold text-center leading-tight mb-6">
            Welcome to
            <br />
            PahadiNest
          </h1>

          <p className="text-center text-lg leading-8 text-emerald-100 max-w-md">
            Discover authentic mountain stays, hidden Himalayan
            destinations, and personalized travel experiences
            across Uttarakhand.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-8 text-center">

            <div>
              <h2 className="text-3xl font-bold">AI</h2>
              <p className="text-sm mt-2">Stay Finder</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">25+</h2>
              <p className="text-sm mt-2">Destinations</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">🏔️</h2>
              <p className="text-sm mt-2">Himalayas</p>
            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="flex items-center justify-center p-10 lg:p-14">

          <div className="w-full max-w-md">

            <p className="text-emerald-600 font-semibold mb-2">
              Welcome Back 👋
            </p>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Login
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mb-8">
              Sign in to continue your journey.
            </p>

            <div className="space-y-5">

              {/* EMAIL */}
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* PASSWORD */}
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* OPTIONS */}
              <div className="flex justify-between items-center text-sm">

                <label className="flex items-center gap-2 dark:text-gray-300">

                  <input
                    type="checkbox"
                    className="accent-emerald-600"
                  />

                  Remember me

                </label>

                <button
                  type="button"
                  className="text-emerald-600 hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              {/* LOGIN BUTTON */}
              <Button
                size="lg"
                onClick={handleLogin}
              >
                Login
              </Button>

              {/* DIVIDER */}
              <div className="flex items-center my-4">

                <div className="flex-1 border-t border-slate-300 dark:border-slate-700"></div>

                <span className="mx-4 text-gray-400 text-sm">
                  OR
                </span>

                <div className="flex-1 border-t border-slate-300 dark:border-slate-700"></div>

              </div>

              {/* GOOGLE LOGIN */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 border border-slate-300 dark:border-slate-700 rounded-xl py-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >

                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />

                Continue with Google

              </button>

              {/* SIGNUP */}
              <p className="text-center text-slate-600 dark:text-slate-300">

                Don't have an account?

                <Link
                  to="/signup"
                  className="ml-2 text-emerald-600 font-semibold hover:underline"
                >
                  Sign Up
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;