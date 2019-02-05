import React from "react";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

const Item = styled.div`
  height: 84px;
  padding: 0px 16px;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  background: ${props => (props.active ? "#f0f0f0" : "")};
  &:hover {
    background-color: ${props => (props.active ? "#f0f0f0" : "#f7f7f7")};
  }
`;

const Photo = styled.div`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  margin-right: 16px;
  background-image: url(${props => props.url});
  border-radius: 2px;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

const Address = styled.div`
  color: #888;
  font-size: 14px;
`;

const RightColumn = styled.div`
  flex-shrink: 0;
  margin-left: 16px;
`;

export default function PlaceItem(props) {
  return (
    <Item
      onClick={e => props.handleSelect(props.item.id)}
      active={props.active}
    >
      {props.item.photos && (
        <Photo
          url={props.item.photos[0].getUrl({ maxWidth: 96, maxHeight: 96 })}
        />
      )}
      <MainContent>
        <Name>{props.item.name}</Name>
        <Address>{props.item.formatted_address.split(",")[0]}</Address>
      </MainContent>
      <RightColumn>
        <FavoriteButton
          favorite={props.item.favorite}
          onClick={e => {
            props.handleFavoriteClicked(props.item.id);
            e.stopPropagation();
          }}
        />
      </RightColumn>
    </Item>
  );
}
