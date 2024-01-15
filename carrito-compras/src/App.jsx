import { useState } from "react";
import Products from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import "tailwindcss/tailwind.css";
import { FILTERS_CATEGORY } from "./constants/filters";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState(initialProducts);

  const [filters, setFilters] = useState({
    category: FILTERS_CATEGORY.all,
    minPrice: 0,
  });

  //Filtrado
  const filterProducts = ({ products }) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (product.category === filters.category ||
          filters.category === FILTERS_CATEGORY.all)
      );
    });
  };

  const productsFiltered = filterProducts({ products });

  return (
    <>
      <Header updateFilter={setFilters}/>
      <Products products={productsFiltered} />
    </>
  );
}

export default App;
