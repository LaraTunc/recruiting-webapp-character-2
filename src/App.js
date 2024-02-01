import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";
import styled from "styled-components";
import { Attributes } from "./components/attributes";
import { Classes } from "./components/classes";
import { Skills } from "./components/skills.js";

const character = {
  attributes: {
    strength: 7,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 15,
  },
};

function App() {
  const [num, setNum] = useState(0);
  const [characters, setCharacters] = useState([character]);

  const updateCharacterAttribute = (index, attribute, value) => {
    const newCharacters = [...characters];
    newCharacters[index].attributes[attribute] = value;
    setCharacters(newCharacters);
  };

  const getSkillPoints = (character) => {
    const intelligence = character.attributes.intelligence;
    const intelligenceModifier = Math.floor((intelligence - 10) / 2);
    const skillPoints = intelligenceModifier * 4 + 10;
    if (skillPoints < 0) return 0;
    return skillPoints;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Lara 🪄</h1>
      </header>
      <section className="App-section">
        {characters.map((character, index) => (
          <div key={index}>
            <h1>Character {index + 1}</h1>
            <SkillCheck>
              <h1>Skill Check</h1>
              <Stack>
                <p>Skill:</p>
                <select>
                  {SKILL_LIST.map((skill) => {
                    return <option key={skill.name}>{skill.name}</option>;
                  })}
                </select>
                <p>DC: </p>
                <input type="number" />
                <button>Roll</button>
              </Stack>
            </SkillCheck>
            <CharacterSpecifics>
              <Attributes
                character={character}
                updateCharacterAttribute={(attr, value) =>
                  updateCharacterAttribute(index, attr, value)
                }
              />
              <Classes character={character} />
              <Skills totalSkillPoints={getSkillPoints(character)} />
            </CharacterSpecifics>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;

const SkillCheck = styled.div`
  box-shadow: 0px 0px 10px 0px white;
  border-radius: 4px;
  margin-top: 8px;
`;

const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const CharacterSpecifics = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;
