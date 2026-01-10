import Link from "next/link";
import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";

interface Props {
  product: Product;
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function ProductCard({
  product,
  favorites,
  setFavorites,
}: Props) {
  return (
    // <div className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4">
    <div className="border rounded-lg p-4 hover:shadow transition">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain mb-4"
        />
        <h3 className="text-sm font-medium line-clamp-2">
          {product.title}
        </h3>
      </Link>

      <div className="flex items-center justify-between mt-3">
        <span className="font-semibold">${product.price}</span>

        <FavoriteButton
          productId={product.id}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </div>
    </div>
  );
}
