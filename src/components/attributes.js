import React, { useState } from "react";
import styled from "styled-components";
import { ATTRIBUTE_LIST } from "../consts.js";
import { IncrementableItem } from "./incerementable-item";

export const Attributes = ({ character, updateCharacterAttribute }) => {
  const getModifier = (value) => {
    return Math.floor((value - 10) / 2);
  };

  return (
    <Container>
      <h2>Attributes</h2>
      {ATTRIBUTE_LIST.map((attr) => {
        const attrValue = character.attributes[attr.toLowerCase()];
        return (
          <Stack key={attr}>
            <IncrementableItem
              text={attr}
              value={attrValue}
              setValue={(value) => {
                return updateCharacterAttribute(attr.toLowerCase(), value);
              }}
              modifier={getModifier(attrValue)}
              total={null}
            />
          </Stack>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px 0px white;
  border-radius: 4px;
  padding: 0 12px;
`;

const Stack = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;
