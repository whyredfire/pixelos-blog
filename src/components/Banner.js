import { useColorMode } from "@docusaurus/theme-common";

export default function Banner({
  lightSrc,
  darkSrc,
  alt = "Banner",
  height = "auto",
  width = "auto",
}) {
  const isDark = useColorMode().colorMode === "dark";

  return (
    <>
      <div style={{ marginBottom: "12px" }}>
        <img
          src={darkSrc}
          alt={alt}
          style={{ display: isDark ? "block" : "none", borderRadius: "12px" }}
          loading="eager"
          height={height}
          width={width}
        />
        <img
          src={lightSrc}
          alt={alt}
          style={{ display: isDark ? "none" : "block", borderRadius: "12px" }}
          loading="eager"
          height={height}
          width={width}
        />
      </div>
    </>
  );
}
