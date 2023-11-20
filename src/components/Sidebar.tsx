'use client'

import React, { useContext } from "react";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import Link from "next/link";

const Sidebar = () => {
  const { isOpen, handleClose }: any = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total }: any = useContext(CartContext);

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"
        } "w-full sidebarrel grid grid-rows-7 bg-white fixed h-screen overflow-y-hidden top-0 h-full shadow-2xl lg:w-1/3 md:w-1/2 w-full transition-all duration-300 z-20 px-4 lg:px-[35px] "`}
    >
      <div className="flex items-center justify-between border-b mb-auto py-2">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        <div
          onClick={handleClose}
          className="cursor-poniter w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="row-span-4 overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item: any) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col mt-auto mb-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span> ${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          href={"/"}
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          href={"/"}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
