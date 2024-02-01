import React, { useState } from "react";
import styled from "styled-components";

export const IncrementableItem = ({
  text,
  value,
  setValue,
  modifier,
  total,
  allPointsUsed,
}) => {
  const handleMinusClick = () => {
    if (value === 0) return;
    setValue(value - 1);
  };

  const handlePlusClick = () => {
    if (allPointsUsed) return;
    setValue(value + 1);
  };

  return (
    <Stack>
      <p>
        {text}: {value} (Modifier: {modifier})
      </p>
      <button onClick={handleMinusClick}>-</button>
      <button onClick={handlePlusClick}>+</button>
      {total && <p>Total: {total}</p>}
    </Stack>
  );
};

const Stack = styled.div`
  display: flex;
`;
