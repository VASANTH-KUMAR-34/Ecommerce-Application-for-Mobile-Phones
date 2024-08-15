import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [ram, setRam] = useState("");
  const [displaysize, setDisplaysize] = useState("");
  const [prices, setPrices] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      await axios.post("http://localhost:8080/api/admin/product/add", {
        brand,
        model,
        ram,
        displaysize,
        prices: parseFloat(prices),
      });
      setSuccessMessage("Product added successfully");
      // Reset form fields
      setBrand("");
      setModel("");
      setRam("");
      setDisplaysize("");
      setPrices("");
    } catch (err) {
      setError("Failed to add product");
      console.error("Error adding product:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-blue-500">
        Add Product
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
            placeholder="Enter brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ram"
            className="block text-sm font-medium text-gray-700"
          >
            RAM:
          </label>
          <input
            id="ram"
            type="text"
            placeholder="Enter RAM"
            value={ram}
            onChange={(e) => setRam(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="prices"
            className="block text-sm font-medium text-gray-700"
          >
            Price:
          </label>
          <input
            id="prices"
            type="number"
            placeholder="Enter price"
            value={prices}
            onChange={(e) => setPrices(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {successMessage && (
          <p className="text-green-500 text-sm mt-2">{successMessage}</p>
        )}
      </form>
    </div>
  );
}

export default AddProduct;
