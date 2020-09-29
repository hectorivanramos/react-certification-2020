const ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove',
};

export const useFavorites = (favorites, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...favorites, action.item];
    case ACTIONS.REMOVE:
      return favorites.filter((video) => video.id !== action.id);
    default:
      return favorites;
  }
};
