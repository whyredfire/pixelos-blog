import { useEffect, useState } from "react";

export default function Banner({
  lightSrc,
  darkSrc,
  alt = "Banner",
  height = "auto",
  width = "auto",
}) {
  const [currentSrc, setCurrentSrc] = useState();

  useEffect(() => {
    const updateSrc = () => {
      if (darkSrc) {
        const isDark =
          document.documentElement.getAttribute("data-theme") === "dark";
        setCurrentSrc(isDark ? darkSrc : lightSrc);
      } else {
        setCurrentSrc(lightSrc);
      }
    };

    updateSrc();

    const observer = new MutationObserver(updateSrc);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [lightSrc, darkSrc]);

  return (
    <>
      <link rel="preload" as="image" fetchpriority="high" href={lightSrc} />
      <link rel="preload" as="image" fetchpriority="high" href={darkSrc} />

      <img
        src={currentSrc}
        alt={alt}
        height={height}
        width={width}
        style={{ borderRadius: "12px" }}
      />
    </>
  );
}
