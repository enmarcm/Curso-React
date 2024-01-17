import "tailwindcss/tailwind.css";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { products as initialProducts } from "./mocks/products.json";
import useFilter from "./hooks/useFilter.js";
// import {IS_DEVELOPMENT} from "./config.js"

function App() {
  const { filterProducts, setFilters, filters } = useFilter();

  const productsFiltered = filterProducts({ products: initialProducts });

  return (
    <>
      <Header />
      <Products products={productsFiltered} />
      <Footer />
      {/* <Footer /> */}

      {/* {IS_DEVELOPMENT && <Footer prop={filters} />} */}
    </>
  );
}

export default App;
