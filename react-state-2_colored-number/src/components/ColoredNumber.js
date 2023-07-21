export default function ColoredNumber({ numberValue }) {
  return (
    <h2 style={{ color: `hsl(${230 - (numberValue / 100) * 230}deg 100% 50%)` }}>
      {numberValue}
    </h2>
  );
}
