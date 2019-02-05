import React from "react";
import styled from "styled-components";
import favoriteIcon from "../assets/favorite.svg";
import favoriteOutlineIcon from "../assets/favorite_outline.svg";

const Favorite = styled.img.attrs({
  src: props => (props.favorite ? favoriteIcon : favoriteOutlineIcon)
})`
  width: 24px;
  height: 24px;
  transition: opacity 0.1s;
  cursor: pointer;
  opacity: ${props => (props.favorite ? 1 : 0.2)};
  &:hover {
    opacity: ${props => (props.favorite ? 1 : 0.35)};
  }
`;

export default function FavoriteButton(props) {
  return <Favorite favorite={props.favorite} onClick={props.onClick} />;
}
