"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { postUser } from "@/actions/server/auth";
import { useRouter, useSearchParams } from "next/navigation";
import SocialButton from "../buttons/SocialButton";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

export default function RegisterForm() {
  const params = useSearchParams();
  const callBack = params.get("callbackUrl") || "";
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postUser(form);
    if (result.acknowledged) {
      //   router.push("/login");
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
        callbackUrl: callBack,
      });
      if (result.ok) {
        router.push(callBack);
        Swal.fire("success", "Registration successful", "success");
      }
    } else {
      Swal.fire("error", "Registration Faild", "error");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-base-200">
      {/* Left Side */}
      <div className="hidden md:flex flex-col justify-center items-center bg-secondary text-white p-10">
        <h1 className="text-4xl font-extrabold mb-4">Join Us 🚀</h1>
        <p className="text-lg text-center max-w-sm">
          নতুন অ্যাকাউন্ট তৈরি করে আপনার সন্তানের জন্য সেরা লার্নিং টয়স সংগ্রহ
          করুন।
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-base-100 p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-2">Register</h2>
          <p className="text-gray-500 mb-6">
            Create your account to get started
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">Full Name</label>
              <div className="flex items-center border rounded-xl px-3 focus-within:ring-2 focus-within:ring-primary">
                <FaUser className="text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="input input-ghost w-full outline-0"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

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
            <button className="btn btn-primary w-full rounded-xl">
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google */}
          <SocialButton />

          {/* Login Link */}
          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
