"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const collection = await dbConnect(collections.PRODUCTS);
  const products = await collection.find({}).toArray();
  return JSON.parse(JSON.stringify(products));
};

export const getSingleProducts = async (id) => {
  if (id.length != 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };
  const product = await dbConnect(collections.PRODUCTS).findOne(query);
  return { ...product, _id: product._id.toString() } || {};
};
