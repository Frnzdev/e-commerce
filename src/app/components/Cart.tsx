"use client";

import { useCartStore } from "@/store";
import CartDrawer from "./CartDrawer";

const Cart = () => {
  const useStore = useCartStore();

  return (
    <>
      <div
        onClick={() => useStore.toggleCart()}
        className="flex items-center cursor-pointer relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
        </svg>

        <span className="absolute left-4 bottom-4 bg-teal-600 text-sm font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {useStore.cart.length}
        </span>
      </div>

      {!useStore.isOpen && <CartDrawer />}
    </>
  );
};

export default Cart;
