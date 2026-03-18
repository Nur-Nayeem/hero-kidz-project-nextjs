"use client";

import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      {/* Warning Icon */}
      <FaExclamationTriangle className="text-6xl text-error mb-4 animate-bounce" />

      {/* 404 Text */}
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Page Not Found
      </h2>

      {/* Message */}
      <p className="text-gray-500 mb-6">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      {/* Home Button */}
      <Link href="/" className="btn btn-primary btn-lg">
        Go Back Home
      </Link>

      {/* Fun Text Effect */}
      <p className="mt-6 text-gray-400 text-sm">
        “Don’t worry, let’s get you back to something fun!”
      </p>
    </div>
  );
}
