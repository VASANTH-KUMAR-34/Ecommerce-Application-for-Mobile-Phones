import React, { useState } from "react";
import axios from "axios";

function SearchProduct() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [pricesLessThan, setPricesLessThan] = useState("");
  const [pricesGreaterThan, setPricesGreaterThan] = useState("");
  const [displaysize, setDisplaysize] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await axios.get("http://localhost:8080/api/search", {
        params: {
          brand,
          model,
          pricesLessThan: pricesLessThan
            ? parseFloat(pricesLessThan)
            : undefined,
          pricesGreaterThan: pricesGreaterThan
            ? parseFloat(pricesGreaterThan)
            : undefined,
          displaysize,
        },
      });
      setProducts(response.data);
    } catch (err) {
      setError("Failed to fetch products");
      console.error("Error fetching products:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Search Products
      </h1>
      <form onSubmit={handleSearch}>
        <div className="mb-4">
          <label
            htmlFor="brand"
            className="block text-sm font-medium text-gray-700"
          >
            Brand:
          </label>
          <input
            id="brand"
            type="text"
            placeholder="Enter Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="model"
            className="block text-sm font-medium text-gray-700"
          >
            Model:
          </label>
          <input
            id="model"
            type="text"
            placeholder="Enter model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pricesLessThan"
            className="block text-sm font-medium text-gray-700"
          >
            Price Less Than:
          </label>
          <input
            id="pricesLessThan"
            type="number"
            placeholder="Enter maximum price"
            value={pricesLessThan}
            onChange={(e) => setPricesLessThan(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pricesGreaterThan"
            className="block text-sm font-medium text-gray-700"
          >
            Price Greater Than:
          </label>
          <input
            id="pricesGreaterThan"
            type="number"
            placeholder="Enter minimum price"
            value={pricesGreaterThan}
            onChange={(e) => setPricesGreaterThan(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="displaysize"
            className="block text-sm font-medium text-gray-700"
          >
            Display Size:
          </label>
          <input
            id="displaysize"
            type="text"
            placeholder="Enter display size"
            value={displaysize}
            onChange={(e) => setDisplaysize(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Search
        </button>
        {error && (
          <p className="mt-4 text-red-500 font-bold text-center">{error}</p>
        )}
      </form>
      {products.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Search Results:
          </h2>
          <ul className="mt-4 space-y-2">
            {products.map((product) => (
              <li
                key={product.id}
                className="bg-gray-50 border border-gray-200 rounded-md p-4 shadow-sm"
              >
                <div className="font-medium text-gray-700">
                  Brand: {product.brand} - Model: {product.model}
                </div>
                <div className="text-gray-600">
                  Price: ${product.prices} - Display Size: {product.displaysize}{" "}
                  - Ram: {product.ram}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchProduct;
