import * as actions from "./actions";

const initialState = {
  query: "food pantry",
  isFetching: false,
  fetchError: false,
  onlyFavorites: false,
  lat: 37.809022,
  lng: -122.268206,
  places: {},
  searchResults: null,
  favorites: [],
  activePlaceId: null,
  /* Google Maps Places service. We need access to the map to initialize it...*/
  service: null
};

function app(state = initialState, action) {
  /* helpers */

  function selectActivePlace(state, action) {
    const newActivePlace = state.places[action.id];
    return {
      ...state,
      activePlaceId: action.id,
      lat: newActivePlace.geometry.location.lat(),
      lng: newActivePlace.geometry.location.lng()
    };
  }

  function deselectActivePlace(state, action) {
    return { ...state, activePlaceId: "" };
  }

  switch (action.type) {
    /* UI actions */

    case actions.UPDATE_QUERY:
      return { ...state, query: action.query };

    case actions.SELECT_ACTIVE_PLACE:
      return selectActivePlace(state, action);

    case actions.DESELECT_ACTIVE_PLACE:
      return deselectActivePlace(state, action);

    case actions.TOGGLE_ACTIVE_PLACE:
      if (state.activePlaceId === action.id)
        return deselectActivePlace(state, action);
      else return selectActivePlace(state, action);

    case actions.TOGGLE_FAVORITE: {
      // data is normalized and duplicated so must be updated in both places
      const targetPlace = state.places[action.id];
      const places = {
        ...state.places,
        [action.id]: { ...targetPlace, favorite: !targetPlace.favorite }
      };

      let favorites;
      if (state.places[action.id].favorite)
        favorites = state.favorites.filter(id => id !== action.id);
      else favorites = state.favorites.concat(action.id);

      return {
        ...state,
        places: places,
        favorites: favorites
      };
    }

    case actions.DESELECT_ONLY_FAVORITES:
      return { ...state, onlyFavorites: false };

    case actions.TOGGLE_ONLY_FAVORITES:
      return { ...state, onlyFavorites: !state.onlyFavorites };

    /* Non-UI actions */

    case actions.PLACES_SERVICE_READY:
      return { ...state, service: action.service };

    case actions.SET_LOCATION:
      return { ...state, lat: action.lat, lng: action.lng };

    case actions.REQUEST_PLACES:
      return { ...state, isFetching: true };

    case actions.REQUEST_PLACES_SUCCESS:
      let places = { ...state.places };
      action.response.forEach(function(place) {
        // if the place already existed, only override the necessary properties
        places[place.id] = { ...places[place.id], ...place };
      });

      let searchResults = action.response.map(place => place.id);

      return {
        ...state,
        places: places,
        searchResults: searchResults,
        isFetching: false,
        fetchError: false
      };

    case actions.REQUEST_PLACES_ERROR:
      return { ...state, fetchError: action.error, isFetching: false };
    default:
      return state;
  }
}

export default app;
