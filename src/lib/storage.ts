const FAVORITES_KEY = "favorites";

export function getFavorites(): number[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
}

export function toggleFavorite(id: number) {
  const favorites = getFavorites();
  const updated = favorites.includes(id)
    ? favorites.filter(fav => fav !== id)
    : [...favorites, id];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  return updated;
}
