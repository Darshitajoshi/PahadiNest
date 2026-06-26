import { useState } from "react";
import { Button, Input } from "../components/ui";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-emerald-50 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-6xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Panel */}
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
            Discover authentic mountain homestays, hidden Himalayan gems,
            and unforgettable travel experiences across Uttarakhand.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-8 text-center">

            <div>
              <h2 className="text-3xl font-bold">100+</h2>
              <p className="text-sm mt-2">Homestays</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">25+</h2>
              <p className="text-sm mt-2">Destinations</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">5★</h2>
              <p className="text-sm mt-2">Experiences</p>
            </div>

          </div>

        </div>

        {/* Right Panel */}
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

              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex justify-between items-center text-sm">

                <label className="flex items-center gap-2 dark:text-gray-300">
                  <input
                    type="checkbox"
                    className="accent-emerald-600"
                  />
                  Remember me
                </label>

                <button className="text-emerald-600 hover:underline">
                  Forgot Password?
                </button>

              </div>

              <Button size="lg">
                Login
              </Button>

              <div className="flex items-center my-4">
                <div className="flex-1 border-t"></div>
                <span className="mx-4 text-gray-400 text-sm">
                  OR
                </span>
                <div className="flex-1 border-t"></div>
              </div>

              <button className="w-full border border-slate-300 dark:border-slate-700 rounded-xl py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                Continue with Google
              </button>

              <p className="text-center text-slate-600 dark:text-slate-300">

                Don't have an account?

                <span className="ml-2 text-emerald-600 font-semibold cursor-pointer hover:underline">
                  Sign Up
                </span>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;