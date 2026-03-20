"use client";
import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const session = useSession();
  const router = useRouter();
  const path = usePathname();
  const isLogin = session?.status == "authenticated";
  const addToCart = async () => {
    if (isLogin) {
      const result = await handleCart({ product, inc: true });
      if (result?.success) {
        Swal.fire("Added to cart", product?.title, "success");
      } else {
        Swal.fire("Opps...", "Something went wrong", "error");
      }
    } else router.push(`/login?callbackUrl=${path}`);
  };
  return (
    <button onClick={addToCart} className="btn btn-primary gap-2">
      <FaShoppingCart />
      Add to Cart
    </button>
  );
};

export default CartButton;
