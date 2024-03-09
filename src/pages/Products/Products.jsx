import React, { useState } from 'react';
import AllProducts from '../../componenets/allproducts/AllProducts';
import Sidbar from '../../componenets/sidebar/Sidbar';
import data from "../../componenets/allproducts/data1";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to filter the data based on selected category
  const filteredData = (data, selected) => {
    if (!selected) {
      return data;
    }

    return data.filter(({ category, company,newPrice }) => {
      return category === selected || company === selected || newPrice===selected;
    });
  };

  const result = filteredData(data, selectedCategory);

  return (
    <div>
      <Sidbar handleChange={handleChange} />
      <AllProducts products={result} /> {/* Pass filtered products to AllProducts */}
    </div>
  );
};

export default Products;
