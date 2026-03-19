"use client";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";

const SocialButton = () => {
  const params = useSearchParams();
  const handleGoogleLogin = async () => {
    const result = await signIn("google", {
      //   redirect: "false",
      callbackUrl: params.get("callbackUrl") || "/",
    });
    if (!result.ok) {
      Swal.fire("error", "Faild to login", "error");
    } else {
      Swal.fire("success", "Login successfull", "success");
    }
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="btn btn-outline w-full rounded-xl gap-2"
    >
      <FaGoogle className="text-red-500" />
      Sign up with Google
    </button>
  );
};

export default SocialButton;
