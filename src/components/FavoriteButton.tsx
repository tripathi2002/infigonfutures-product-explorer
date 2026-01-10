"use client";

interface Props {
  productId: number;
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function FavoriteButton({
  productId,
  favorites,
  setFavorites,
}: Props) {
  const isFavorite = favorites.includes(productId);

  const toggleFavorite = () => {
    const updated = isFavorite
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <button
      onClick={toggleFavorite}
      aria-label="Toggle favorite"
      className={`text-lg ${
        isFavorite ? "text-red-500" : "text-gray-400"
      }`}
    >
      ♥
    </button>
  );
}
