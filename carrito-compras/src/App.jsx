import "tailwindcss/tailwind.css";
import { useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { products as initialProducts } from "./mocks/products.json";
import useFilter from "./constants/useFilter";
import {IS_DEVELOPMENT} from "./config.js"

function App() {
  const [products, setProducts] = useState(initialProducts);

  const { filterProducts, setFilters, filters } = useFilter();

  const productsFiltered = filterProducts({ products });

  return (
    <>
      <Header updateFilters={setFilters} />
      <Products products={productsFiltered} />
      <Footer prop={filters} />

      {/* {IS_DEVELOPMENT && <Footer prop={filters} />} */}
    </>
  );
}

export default App;
