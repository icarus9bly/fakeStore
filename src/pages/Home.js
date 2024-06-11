import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  // Define categories
  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          {/* Dropdown Menu for Category Selection */}
          <div className="mb-6">
            <select
              className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
