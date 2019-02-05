import React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import FavoritesCount from "./FavoritesCount";

const Container = styled.div`
  padding: 16px;
  display: flex;
`;

const LeftSide = styled.div`
  flex: 1;
`;

const RightSide = styled.div`
  flex-shrink: 0;
  margin-left: 16px;
`;

export default function TopBar(props) {
  return (
    <Container>
      <LeftSide>
        <SearchBox
          query={props.query}
          onChange={props.onQueryChange}
          onSubmit={props.onQuerySubmit}
        />
      </LeftSide>
      <RightSide>
        <FavoritesCount
          count={props.favoritesCount}
          active={props.onlyFavorites}
          onClick={props.onFavoritesCountClicked}
        />
      </RightSide>
    </Container>
  );
}
