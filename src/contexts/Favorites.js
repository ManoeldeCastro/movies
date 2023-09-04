import { createContext, useState, useContext } from 'react';

export const FavoriteContext = createContext({});

FavoriteContext.displayName = 'MyFavorites';

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoriteContext);

  function addFavorite(newFavorite) {
    const repeatedFavorite = favorite.some(
      (elem) => elem.id === newFavorite.id,
    );

    let newList = [...favorite];

    if (!repeatedFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }
    newList = favorite.filter((item) => item.id !== newFavorite.id);

    return setFavorite(newList);
  }

  return {
    favorite,
    addFavorite,
  };
}
