"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({ product }) => {
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();
  const addToCart = () => {
    if (isLogin) alert(product._id);
    else router.push(`/login?callbackUrl=${path}`);
  };
  return (
    <button onClick={addToCart} className="btn btn-primary gap-2">
      <FaShoppingCart />
      Add to Cart
    </button>
  );
};

export default CartButton;
