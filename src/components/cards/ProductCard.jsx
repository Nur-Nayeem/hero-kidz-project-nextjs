"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const discountPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="card min-w-60 bg-base-100 shadow-md hover:shadow-xl transition">
      {/* Image */}
      <figure className="relative h-52 w-full">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={180}
          className="object-cover"
        />

        {product.discount > 0 && (
          <div className="badge badge-error absolute top-2 right-2 text-white">
            -{product.discount}%
          </div>
        )}
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="font-semibold line-clamp-2 text-sm md:text-base">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <span className="ml-1">{product.ratings}</span>
          </div>

          <span className="text-gray-500">({product.reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-xs text-gray-500">{product.sold} sold</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountPrice || product.price}
          </span>

          {product.discount > 0 && (
            <span className="line-through text-gray-400 text-sm">
              ৳{product.price}
            </span>
          )}
        </div>

        {/* Add To Cart */}
        <Link
          href={`/products/${product._id}`}
          className="btn btn-primary btn-outline btn-sm mt-2 w-full md:py-5"
        >
          View Details
        </Link>
        <button className="btn btn-primary btn-sm mt-2 w-full md:py-5">
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
