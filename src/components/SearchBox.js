import React from "react";
import styled from "styled-components";

const TextInput = styled.input.attrs({
  type: "text",
  placeholder: "What do you want to eat?"
})`
  flex-shrink: 0;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export default function SearchBox(props) {
  return (
    <form
      onSubmit={e => {
        props.onSubmit(props.query);
        e.preventDefault();
      }}
    >
      <TextInput
        value={props.query}
        onChange={e => props.onChange(e.target.value)}
      />
    </form>
  );
}
