import React from "react";
import styled from "styled-components";
import favoriteIcon from "../assets/favorite.svg";
import favoriteOutlineIcon from "../assets/favorite_outline.svg";

const Button = styled.div`
  display: inline-flex;
  padding: 4px 8px;
  color: black;
  border: 1px solid transparent;
  border-radius: 4px;
  opacity: 0.25;
  &:hover {
    ${props => (props.count && !props.active ? "opacity: 0.4" : "")};
  }
  ${props =>
    props.count
      ? `
    border-color:#777;
    cursor: pointer;
  font-weight: bold;
    `
      : ""} ${props =>
      props.active
        ? `
  color: #ff1654;
  border-color: #ff1654;
  opacity: 1;
  `
        : ""};
`;

const Image = styled.img.attrs({
  src: props => props.src
})`
  margin-right: 4px;
`;

export default function FavoritesCount(props) {
  return (
    <Button
      onClick={e => (props.count ? props.onClick(e) : "")}
      active={props.active}
      count={props.count}
    >
      <Image src={props.active ? favoriteIcon : favoriteOutlineIcon} />
      {props.count}
    </Button>
  );
}
