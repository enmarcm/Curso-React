import React from "react";
import Filters from "./Filters";

const Header = ({updateFilter}) => {
  return (
    <section className="mb-12 flex w-full items-center justify-between h-24 p-2 box-borderf">
      <h1 className="text-2xl font-extrabold">React Shop 🛍️</h1>
      <Filters updateFilter={updateFilter}/>
    </section>
  );
};

export default Header;
