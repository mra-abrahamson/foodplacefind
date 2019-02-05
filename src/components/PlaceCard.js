import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0 8px 16px;
`;

const Photo = styled.img`
  width: 192px;
  max-height: 192px;
  margin-bottom: 16px;
  border-radius: 2px;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
  max-width: 192px;
`;

export default function(props) {
  return (
    <Container>
      {props.place.photos && (
        <Photo
          src={props.place.photos[0].getUrl({
            maxWidth: 192 * 2,
            maxHeight: 192 * 2
          })}
        />
      )}
      <Name>{props.place.name}</Name>
    </Container>
  );
}
