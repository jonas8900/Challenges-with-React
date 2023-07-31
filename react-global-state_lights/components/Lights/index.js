import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lightsArray, handleToggleLights }) {
  console.log(lightsArray);

  return (
    <StyledLights>
      {lightsArray.map((light) => {
        return (
          <Light
            key={light.id}
            name={light.name}
            handleToggleLights={() => handleToggleLights(light.id)}
            isOn={light.isOn}
          />
        );
      })}
    </StyledLights>
  );
}
