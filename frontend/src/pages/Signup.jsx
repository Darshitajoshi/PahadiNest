import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../components/ui";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-emerald-50 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-6xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Panel */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-emerald-700 via-green-600 to-teal-700 text-white p-14">

          <img
            src="/logopahadinest.png"
            alt="PahadiNest Logo"
            className="w-44 mb-8"
          />

          <h1 className="text-5xl font-bold text-center mb-6">
            Join
            <br />
            PahadiNest
          </h1>

          <p className="text-center text-lg text-emerald-100 leading-8">
            Create your account and start exploring beautiful
            mountain destinations across Uttarakhand.
          </p>

        </div>

        {/* Right Panel */}
        <div className="flex items-center justify-center p-10">

          <div className="w-full max-w-md">

            <p className="text-emerald-600 font-semibold mb-2">
              Welcome 👋
            </p>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Create Account
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mb-8">
              Register to continue.
            </p>

            <div className="space-y-5">

              <Input
                label="Full Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

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
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Button size="lg">
                Create Account
              </Button>

              <p className="text-center text-gray-600 dark:text-gray-300">

                Already have an account?

                <Link
                  to="/login"
                  className="ml-2 text-emerald-600 font-semibold hover:underline"
                >
                  Login
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;