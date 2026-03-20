"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import SocialButton from "../buttons/SocialButton";

export default function LoginForm() {
  const params = useSearchParams();
  const callBack = params.get("callbackUrl") || "/";
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
      // callbackUrl: params.get("callbackUrl") || "/",
    });
    console.log(result);

    if (!result.ok) {
      Swal.fire({
        icon: "error",
        title: "Login Faild...",
        text: "Something went wrong!",
      });
    } else {
      Swal.fire("success", "Wellcome to Hero-Kidz", "success");
      router.push(callBack);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-base-200">
      {/* Left Side (Brand / Banner) */}
      <div className="hidden md:flex flex-col justify-center items-center bg-primary text-white p-10">
        <h1 className="text-4xl font-extrabold mb-4">Welcome Back 👋</h1>
        <p className="text-lg text-center max-w-sm">
          লগইন করে আপনার প্রিয় খেলনা ও লার্নিং প্রোডাক্ট কিনুন সহজে।
        </p>
      </div>

      {/* Right Side (Form) */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-base-100 p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <p className="text-gray-500 mb-6">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="label">Email</label>
              <div className="flex items-center border rounded-xl px-3 focus-within:ring-2 focus-within:ring-primary">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="input input-ghost w-full outline-0"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="label">Password</label>
              <div className="flex items-center border rounded-xl px-3 focus-within:ring-2 focus-within:ring-primary">
                <FaLock className="text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="input input-ghost w-full outline-0"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full rounded-xl">Login</button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <SocialButton />

          {/* Register Link */}
          <p className="text-center text-sm mt-6">
            Don’t have an account?{" "}
            <Link
              href={`/register?callbackUrl=${callBack}`}
              className="text-primary font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
