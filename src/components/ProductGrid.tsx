"use client";

import { useEffect, useMemo, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortSelect from "./SortSelect";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sort, setSort] = useState("none");

  // Load favorites from localStorage
useEffect(() => {
  try {
    const stored = localStorage.getItem("favorites");
    setFavorites(stored ? JSON.parse(stored) : []);
  } catch {
    setFavorites([]);
  }
}, []);

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      const matchesFavorite = !showFavorites || favorites.includes(product.id);

      return matchesSearch && matchesCategory && matchesFavorite;
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, category, showFavorites, favorites, sort]);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} />
        <SortSelect value={sort} onChange={setSort} />
<div className="p-4 bg-gray-200 dark:bg-red-500">
  Dark mode test
</div>


        <CategoryFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showFavorites}
            onChange={() => setShowFavorites((prev) => !prev)}
          />
          Show favorites
        </label>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
      )}
    </>
  );
}
