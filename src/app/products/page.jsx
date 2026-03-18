import Products from "@/components/home/Products";
import React from "react";

export const metadata = {
  title: "All Products",
  description: "Explore All Products Here",
};

const AllProducts = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default AllProducts;
