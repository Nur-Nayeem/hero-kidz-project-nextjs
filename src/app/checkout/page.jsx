import { getCart } from "@/actions/server/cart";
import CheckOut from "@/components/home/CheckOut";
import React from "react";
import { fontBangla } from "../layout";
import { TbHorseToy } from "react-icons/tb";
import Link from "next/link";

const checkOutPage = async () => {
  const cartItems = await getCart();
  const formattedItems = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div>
      {/* title  */}
      <div className="">
        <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">
          Check Out Page
        </h2>
      </div>
      {cartItems.length == 0 ? (
        <>
          <div className="text-center py-20 space-y-5">
            <h2 className={`${fontBangla.className} text-4xl font-bold`}>
              আপনি কোন প্রোডাক্ট সিলেক্ট করেন নি
            </h2>
            <Link
              href={"/products"}
              className="btn btn-primary btn-lg btn-wide"
            >
              <TbHorseToy /> পন্য দেখুন
            </Link>
          </div>
        </>
      ) : (
        <CheckOut cartItems={formattedItems} />
      )}
    </div>
  );
};

export default checkOutPage;
