import React, { useState } from "react";
import styled from "styled-components";
import { SKILL_LIST } from "../consts";
import { IncrementableItem } from "./incerementable-item";

export const Skills = ({ totalSkillPoints }) => {
  const [skillsWithPoints, setSkillsWithPoints] = useState(
    SKILL_LIST.map((skill) => {
      return {
        ...skill,
        points: 0,
      };
    })
  );
  const totalSkillPointsUsed = skillsWithPoints.reduce(
    (acc, skill) => acc + skill.points,
    0
  );
  const allPointsUsed = totalSkillPointsUsed === totalSkillPoints;

  const setSkillPoint = (index, points) => {
    const newSkills = [...skillsWithPoints];
    newSkills[index].points = points;
    setSkillsWithPoints(newSkills);
  };

  return (
    <Container>
      <h2>Skills</h2>
      <h3>Total skill points available: {totalSkillPoints}</h3>
      {SKILL_LIST.map((skill, index) => {
        return (
          <div key={skill.name}>
            <IncrementableItem
              text={skill.name}
              value={skillsWithPoints[index].points}
              setValue={(value) => setSkillPoint(index, value)}
              modifier={skill.attributeModifier}
              total={0}
              allPointsUsed={allPointsUsed}
            />
          </div>
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
