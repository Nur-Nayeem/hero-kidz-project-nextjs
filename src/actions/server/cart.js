"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const { dbConnect, collections } = require("@/lib/dbConnect");

const cartCollection = dbConnect(collections.CART);

export const handleCart = async ({ product, inc = true }) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (user) return { success: false };

  const query = { email: user?.email, productId: product?._id };

  const isAdded = await cartCollection.findOne(query);

  if (isAdded) {
    //if exist update
    const updateData = {
      $inc: {
        quantity: inc ? 1 : -1,
      },
    };
    const result = await cartCollection.updateOne(query, updateData);
    return { success: Boolean(result.modifiedCount) };
  } else {
    //insert new
    const newData = {
      productId: product?._id,
      email: user?.email,
      title: product.title,
      quantity: 1,
      image: product.image,
      price: product.price - (product.price * product.discount) / 100,
      username: user?.name,
    };
    const result = await cartCollection.insertOne(newData);
    return { success: result.acknowledged };
  }
};
