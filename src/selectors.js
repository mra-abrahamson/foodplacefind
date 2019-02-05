import { createSelector } from "reselect";

const getPlaces = state => state.places;
const getSearchResults = state => state.searchResults;
const getFavorites = state => state.favorites;
const getActivePlaceId = state => state.activePlaceId;

export const getActivePlace = createSelector(
  [getPlaces, getActivePlaceId],
  function(places, activePlaceId) {
    return places[activePlaceId];
  }
);

export const getSearchResultPlaces = createSelector(
  [getPlaces, getSearchResults],
  function(places, searchResults) {
    if (searchResults) return searchResults.map(id => places[id]);
    else return [];
  }
);

export const getFavoritePlaces = createSelector(
  [getPlaces, getFavorites],
  function(places, favorites) {
    return favorites.map(id => places[id]);
  }
);
