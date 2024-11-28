export default function DeviceScreenshot({
  src,
  width = 230,
  radius = 24,
  height = 500,
}) {
  return (
    <img
      src={src}
      width={width}
      height={height}
      style={{ borderRadius: radius }}
      alt="Screenshot"
    />
  );
}
