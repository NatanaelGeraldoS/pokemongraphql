import { FAVORITE_STORAGE_KEY } from "./key";

export const storeFavorite = (favoriteMap) => {
    localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(favoriteMap));
};
export const readStoredFavorite = () => {
    const FavoriteMap = JSON.parse(localStorage.getItem(FAVORITE_STORAGE_KEY));
    return FavoriteMap ? FavoriteMap : [];
};
