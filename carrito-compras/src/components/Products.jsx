import React from "react";
import { AddToCartIcon } from "./Icons.jsx";

const Products = ({ products }) => {
  return (
    <main className="w-full flex justify-center items-center">
      <ul className="grid grid-cols-auto-fit-200 gap-4 w-full">
        {products.map((product) => {
          return (
            <li
              key={product.id}
              className="flex flex-col gap-4 shadow-md rounded-sm bg-[#111] text-white p-4 justify-between"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-sm w-full aspect-video block object-cover bg-white"
              />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;
