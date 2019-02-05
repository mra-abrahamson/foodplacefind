import React from "react";
import styled from "styled-components";
import PlaceItem from "./PlaceItem";

const List = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ErrorMessage = styled.div`
  padding: 16px;
  color: #777;
`;

export default function PlacesList(props) {
  if (!props.onlyFavorites) {
    if (props.fetchError)
      return <ErrorMessage>{props.fetchError}</ErrorMessage>;

    if (props.searchResults && !props.searchResults.length)
      return <ErrorMessage>No places found</ErrorMessage>;
  }

  const list = props.places.map(place => (
    <PlaceItem
      item={place}
      key={place.id}
      handleSelect={props.handleSelect}
      handleFavoriteClicked={props.handleFavoriteClicked}
      active={place.id === props.activePlaceId}
    />
  ));

  return <List>{list}</List>;
}
