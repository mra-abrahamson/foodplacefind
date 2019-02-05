/* Redux container component */

import { connect } from "react-redux";
import {
  updateQuery,
  submitQuery,
  fetchPlaces,
  deselectActivePlace,
  toggleOnlyFavorites
} from "../actions";
import TopBar from "../components/TopBar";
import { getFavoritePlaces } from "../selectors";

const mapStateToProps = function(state) {
  return {
    query: state.query,
    favoritesCount: getFavoritePlaces(state).length,
    onlyFavorites: state.onlyFavorites
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onQueryChange: query => {
      dispatch(updateQuery(query));
    },
    onQuerySubmit: query => {
      dispatch(submitQuery(query));
      dispatch(fetchPlaces(query));
    },
    onFavoritesCountClicked: function() {
      dispatch(deselectActivePlace());
      dispatch(toggleOnlyFavorites());
    }
  };
};

const TopBarControls = connect(mapStateToProps, mapDispatchToProps)(TopBar);

export default TopBarControls;
