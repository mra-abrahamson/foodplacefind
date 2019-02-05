/* Redux container component */

import { connect } from "react-redux";
import MapWrapper from "../components/MapWrapper";
import {
  getActivePlace,
  getSearchResultPlaces,
  getFavoritePlaces
} from "../selectors";
import {
  placesServiceReady,
  setLocation,
  toggleActivePlace,
  deselectActivePlace
} from "../actions";

const mapStateToProps = function(state) {
  return {
    lat: state.lat,
    lng: state.lng,
    places: state.onlyFavorites
      ? getFavoritePlaces(state)
      : getSearchResultPlaces(state),
    activePlace: getActivePlace(state)
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onMapReady: function(mapProps, map) {
      const service = new window.google.maps.places.PlacesService(map);
      dispatch(placesServiceReady(service));

      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          dispatch(setLocation(pos.coords.latitude, pos.coords.longitude));
        });
      }
    },
    onMarkerClicked: function(props, marker, e) {
      dispatch(toggleActivePlace(props.id));
    },
    onInfoWindowClose: function() {
      dispatch(deselectActivePlace());
    },
    onMapClicked: function() {
      dispatch(deselectActivePlace());
    }
  };
};

const MapControls = connect(mapStateToProps, mapDispatchToProps)(MapWrapper);

export default MapControls;
