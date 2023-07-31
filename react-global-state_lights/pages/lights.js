import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({
  lights,
  toggleLight,
  lightsArray,
  handleToggleLights,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <Lights
        lights={lights}
        toggleLight={toggleLight}
        lightsArray={lightsArray}
        handleToggleLights={handleToggleLights}
      />
    </>
  );
}

// Lights({plightsArray: lightsArray, phandleToggle: handleToggle, plights: lights, ptoggleLight: toggleLight})
