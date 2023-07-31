import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const lightsArray = [
  { id: 1, name: "Living Room", isOn: 0 },
  { id: 2, name: "Kitchen", isOn: 0 },
  { id: 3, name: "Bedroom", isOn: 0 },
  { id: 4, name: "Bathroom", isOn: 0 },
  { id: 5, name: "Garage", isOn: 0 },
  { id: 6, name: "Porch", isOn: 0 },
  { id: 7, name: "Garden", isOn: 0 },
  { id: 8, name: "Office", isOn: 0 },
];

export default function App({ Component, pageProps }) {
  const [toggleLight, setToggleLight] = useState(lightsArray);

  function handleToggleLights(lightID) {
    const rightLight = lightsArray.map((lightArray) => {
      if (lightID === lightArray.id) {
        const lightsOn = {
          ...toggleLight,
          isOn: isOn + 1,
        };
      }
    });
    setToggleLight(rightLight);
  }

  console.log(toggleLight);

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lightsArray={lightsArray}
        handleToggleLights={handleToggleLights}
      />
    </Layout>
  );
}
