import React, { useState } from "react";
import styled from "styled-components";
import { CLASS_LIST } from "../consts.js";
import { ClassItem } from "./class-item";

export const Classes = ({ character }) => {
  return (
    <Container>
      <h2>Classes</h2>
      {Object.keys(CLASS_LIST).map((classItem) => (
        <div key={classItem}>
          <ClassItem
            name={classItem}
            requirements={CLASS_LIST[classItem]}
            attributes={character.attributes}
          />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px white;
  border-radius: 4px;
  padding: 0 12px;
`;
