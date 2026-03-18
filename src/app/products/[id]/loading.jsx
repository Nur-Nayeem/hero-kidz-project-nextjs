const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Skeleton */}
        <div className="skeleton h-100 w-full rounded-xl"></div>

        {/* Info Skeleton */}
        <div className="space-y-4">
          <div className="skeleton h-8 w-3/4"></div>

          <div className="skeleton h-4 w-1/2"></div>

          <div className="flex gap-3">
            <div className="skeleton h-4 w-16"></div>
            <div className="skeleton h-4 w-24"></div>
          </div>

          <div className="skeleton h-10 w-32"></div>

          <div className="space-y-2">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-5/6"></div>
            <div className="skeleton h-4 w-4/6"></div>
          </div>

          <div className="skeleton h-10 w-40"></div>
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="mt-10 space-y-3">
        <div className="skeleton h-6 w-40"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-5/6"></div>
        <div className="skeleton h-4 w-4/6"></div>
      </div>

      {/* Q&A Skeleton */}
      <div className="mt-10 space-y-4">
        <div className="skeleton h-6 w-48"></div>

        <div className="skeleton h-16 w-full"></div>
        <div className="skeleton h-16 w-full"></div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
