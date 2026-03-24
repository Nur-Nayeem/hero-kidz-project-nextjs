"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import CartItem from "../cards/CartItem";

const Cart = ({ cartItem = [] }) => {
  const [items, setItems] = useState(cartItem);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item._id != id));
  };

  const updateQuantity = (id, q) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id == id ? { ...item, quantity: q } : item,
      ),
    );
  };

  return (
    <div className="flex gap-6 flex-col lg:flex-row">
      {/* LEFT : CART ITEMS */}
      <div className="flex-1 space-y-4">
        {items.map((item) => (
          <CartItem
            key={item._id.toString()}
            item={{ ...item, _id: item._id.toString() }}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      {/* RIGHT : SUMMARY CARD */}
      <div className="flex-1">
        <div className="card bg-base-100 shadow-xl p-4 sticky top-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-2 text-sm">
            {items.map((item) => (
              <div
                key={item._id}
                className="flex justify-between border-b pb-1"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    Qty: {item.quantity} × ৳{item.price}
                  </p>
                </div>
                <p className="font-semibold">৳{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="divider"></div>

          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total Price</span>
              <span>৳{totalPrice}</span>
            </div>
          </div>

          <Link
            href={"/checkout"}
            className="btn btn-primary w-full mt-4"
            disabled={!items.length}
          >
            Confirm Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
