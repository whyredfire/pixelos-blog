import { useEffect, useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Banner({
  lightSrc,
  darkSrc,
  alt = "Banner",
  height = "auto",
  width = "auto",
}) {
  const [currentSrc, setCurrentSrc] = useState(lightSrc);
  const { colorMode } = useColorMode();

  useEffect(() => {
    setCurrentSrc(colorMode === "dark" ? darkSrc : lightSrc);
  }, [colorMode, lightSrc, darkSrc]);

  return (
    <>
      <link rel="preload" as="image" fetchpriority="high" href={lightSrc} />
      <link rel="preload" as="image" fetchpriority="high" href={darkSrc} />

      <img
        src={currentSrc}
        alt={alt}
        height={height}
        width={width}
        loading="lazy"
        style={{ borderRadius: "12px" }}
      />
    </>
  );
}
