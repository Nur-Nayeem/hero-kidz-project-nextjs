"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaExclamationCircle, FaRedo } from "react-icons/fa";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-4">
      {/* Icon */}
      <FaExclamationCircle className="text-6xl text-error mb-4" />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Something went wrong
      </h1>

      {/* Message */}
      <p className="text-gray-500 mb-6 max-w-md">
        An unexpected error occurred. Please try again or go back to the
        homepage.
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        {/* Retry */}
        <button onClick={() => reset()} className="btn btn-primary gap-2">
          <FaRedo />
          Try Again
        </button>

        {/* Home */}
        <Link href="/" className="btn btn-outline">
          Go Home
        </Link>
      </div>
    </div>
  );
}
