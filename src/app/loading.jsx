export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      {/* Animated Circle Loader */}
      <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-wide">
        Hero <span className="text-primary">Kidz</span>
      </h2>
      {/* Subtitle */}
      <p className="text-gray-500 mt-2 animate-pulse">
        Preparing something fun for you...
      </p>
    </div>
  );
}
