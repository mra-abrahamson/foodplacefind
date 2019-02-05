import { getFavoritePlaces } from "./selectors";

export const UPDATE_QUERY = "UPDATE_QUERY";
export const SUBMIT_QUERY = "SUBMIT_QUERY";
export const TOGGLE_ACTIVE_PLACE = "TOGGLE_ACTIVE_PLACE";
export const SELECT_ACTIVE_PLACE = "SELECT_ACTIVE_PLACE";
export const DESELECT_ACTIVE_PLACE = "DESELECT_ACTIVE_PLACE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const DESELECT_ONLY_FAVORITES = "DESELECT_ONLY_FAVORITES";
export const TOGGLE_ONLY_FAVORITES = "TOGGLE_ONLY_FAVORITES";

export const SET_LOCATION = "SET_LOCATION";
export const PLACES_SERVICE_READY = "PLACES_SERVICE_READY";
export const REQUEST_PLACES = "REQUEST_PLACES";
export const REQUEST_PLACES_ERROR = "REQUEST_PLACES_ERROR";
export const REQUEST_PLACES_SUCCESS = "REQUEST_PLACES_SUCCESS";

/* UI actions */

export function updateQuery(query) {
  return { type: UPDATE_QUERY, query: query };
}

export function submitQuery(query) {
  return { type: SUBMIT_QUERY, query: query };
}

export function toggleActivePlace(id) {
  return { type: TOGGLE_ACTIVE_PLACE, id: id };
}

export function selectActivePlace(id) {
  return { type: SELECT_ACTIVE_PLACE, id: id };
}

export function deselectActivePlace() {
  return { type: DESELECT_ACTIVE_PLACE };
}

export function _toggleFavorite(id) {
  return { type: TOGGLE_FAVORITE, id: id };
}

export function deselectOnlyFavorites() {
  return { type: DESELECT_ONLY_FAVORITES };
}

export function toggleOnlyFavorites() {
  return { type: TOGGLE_ONLY_FAVORITES };
}

/* Non-UI actions */

export function setLocation(lat, lng) {
  return { type: SET_LOCATION, lat: lat, lng: lng };
}

export function placesServiceReady(service) {
  return { type: PLACES_SERVICE_READY, service: service };
}

export function requestPlaces() {
  return { type: REQUEST_PLACES };
}

export function requestPlacesError(error) {
  return { type: REQUEST_PLACES_ERROR, error: error };
}

export function requestPlacesSuccess(response) {
  return { type: REQUEST_PLACES_SUCCESS, response: response };
}

/* Asynchronous actions */

export function toggleFavorite(id) {
  return function(dispatch, getState) {
    const state = getState();
    const place = state.places[id];

    if (state.activePlaceId !== id && !place.favorite)
      dispatch(selectActivePlace(id));

    if (state.activePlaceId === id && place.favorite)
      dispatch(deselectActivePlace());

    dispatch(_toggleFavorite(id));

    if (!getFavoritePlaces(getState()).length)
      dispatch(deselectOnlyFavorites());
  };
}

export function fetchPlaces(query) {
  return function(dispatch, getState) {
    dispatch(requestPlaces());

    const GMaps = window.google.maps;

    const state = getState();

    let request = {
      location: new GMaps.LatLng(state.lat, state.lng),
      radius: "500",
      query: state.query
    };

    function callback(results, status) {
      if (status === GMaps.places.PlacesServiceStatus.OK)
        dispatch(requestPlacesSuccess(results));
      else dispatch(requestPlacesError("Google Maps Places request failed :("));

      // display search results
      dispatch(deselectActivePlace());
      dispatch(deselectOnlyFavorites());
    }

    let service = getState().service;
    service.textSearch(request, callback);
  };
}
