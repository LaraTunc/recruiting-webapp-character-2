import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const ClassItem = ({ name, requirements, attributes }) => {
  const [open, setOpen] = useState(false);
  const meetsRequirements = Object.keys(requirements).every((req) => {
    return attributes[req.toLowerCase()] >= requirements[req];
  });

  return (
    <Container>
      <Stack>
        <p
          style={{
            color: meetsRequirements ? "green" : "white",
          }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {name}
        </p>
      </Stack>
      {open && (
        <Tooltip>
          <h2>{name}</h2>
          {Object.keys(requirements).map((req) => (
            <p key={req}>
              {req}: {requirements[req]}
            </p>
          ))}
        </Tooltip>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Tooltip = styled.div`
  position: absolute;
  background: gray;
  z-index: 1;
  padding: 4px;
  border-radius: 4px;
`;

const Stack = styled.div`
  display: flex;
  justify-content: center;
`;
