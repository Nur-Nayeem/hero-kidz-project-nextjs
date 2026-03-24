"use client";

import {
  decreaseItemDb,
  deleteItemsFromCart,
  increaseItemDb,
} from "@/actions/server/cart";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartItem = ({ item, removeItem, updateQuantity }) => {
  const { title, image, quantity, price, _id } = item;

  const [loading, setLoading] = useState(false);

  const handleDeleteCart = async () => {
    setLoading(true);
    Swal.fire({
      title: "Are you sure ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteItemsFromCart(_id);

        if (result.success) {
          removeItem(_id);

          Swal.fire({
            title: "Deleted!",
            text: "প্রোডাক্ট কার্ট থেকে বাদ দেয়া হয়েছে.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Opps!",
            text: "Something went wrong.",
            icon: "error",
          });
        }
      }
      setLoading(false);
    });
  };

  const onIncrease = async () => {
    setLoading(true);
    const result = await increaseItemDb(_id, quantity);

    if (result.success) {
      Swal.fire("success", "এই প্রোডাক্ট টি আরেকবার  যুক্ত করা হলো", "success");
      updateQuantity(_id, quantity + 1);
    }
    setLoading(false);
  };

  const onDecrease = async () => {
    setLoading(true);
    const result = await decreaseItemDb(_id, quantity);
    if (result.success) {
      Swal.fire("success", "এই প্রোডাক্ট টির qauntity   কমানো হলো", "success");
      updateQuantity(_id, quantity - 1);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-base-100  border-primary shadow rounded-xl">
      {/* Image */}
      <div className="w-20 h-20 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-sm md:text-base">{title}</h3>
        <p className="text-sm text-gray-500">Price: ৳ {price}</p>

        {/* Quantity controls */}
        <div className="flex items-center gap-2 mt-2">
          <button
            className="btn btn-xs btn-outline"
            onClick={onDecrease}
            disabled={quantity === 1 || loading}
          >
            <FaMinus />
          </button>

          <span className="px-3 font-medium">{quantity}</span>

          <button
            className="btn btn-xs btn-outline"
            disabled={quantity === 10 || loading}
            onClick={onIncrease}
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Total + Remove */}
      <div className="text-right space-y-2">
        <p className="font-semibold">৳ {price * quantity}</p>

        <button
          onClick={handleDeleteCart}
          className="btn btn-sm btn-error btn-outline"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
