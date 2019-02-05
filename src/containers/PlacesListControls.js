/* Redux container component */

import { connect } from "react-redux";
import PlacesList from "../components/PlacesList";
import { toggleActivePlace, toggleFavorite } from "../actions";
import { getSearchResultPlaces, getFavoritePlaces } from "../selectors";

function mapStateToProps(state) {
  return {
    fetchError: state.fetchError,
    onlyFavorites: state.onlyFavorites,
    places: state.onlyFavorites
      ? getFavoritePlaces(state)
      : getSearchResultPlaces(state),
    activePlaceId: state.activePlaceId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSelect: function(id) {
      dispatch(toggleActivePlace(id));
    },
    handleFavoriteClicked: function(id) {
      dispatch(toggleFavorite(id));
    }
  };
}

const PlacesListControls = connect(mapStateToProps, mapDispatchToProps)(
  PlacesList
);

export default PlacesListControls;
