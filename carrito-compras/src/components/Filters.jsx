import { useState, useId } from "react";
import { FILTERS_CATEGORY } from "../constants/filters";

const Filters = ({ updateFilters }) => {
  const [minPrice, setMinPrice] = useState(0);

  const minPrinceId = useId();
  const categoryId = useId();

  const handleChangePrice = (e) => {
    const newMinPrice = e.target.value;
    setMinPrice(newMinPrice);
    updateFilters((prevState) => ({ ...prevState, minPrice: newMinPrice }));
  };

  const handleChangeCategory = (e) => {
    const newCategory = e.target.value;
    const valueCategory = FILTERS_CATEGORY[newCategory];
    updateFilters((prevState) => ({ ...prevState, category: valueCategory }));
  };

  return (
    <section className="flex flex-col gap-4 box-border h-full justify-center">
      <div className="flex gap-4">
        <label htmlFor={minPrinceId}>Price</label>
        <input
          type="range"
          id={minPrinceId}
          name="price"
          min={0}
          max={1000}
          value={minPrice}
          onChange={handleChangePrice}
        />
        <span className="min-w-12">${minPrice}</span>
      </div>

      <div className="flex gap-4">
        <label htmlFor={categoryId}>Category</label>
        <select
          id={categoryId}
          name="category"
          className="w-full"
          onChange={handleChangeCategory}
        >
          {Object.keys(FILTERS_CATEGORY).map((category, index) => (
            <option key={`category_${index}`} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Filters;
