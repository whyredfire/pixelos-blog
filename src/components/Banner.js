import { useEffect, useState } from "react";

export default function Banner({
  lightSrc,
  darkSrc,
  alt = "Banner",
  height = "auto",
  width = "auto",
}) {
  const [currentSrc, setCurrentSrc] = useState(lightSrc);

  useEffect(() => {
    const handleThemeChange = () => {
      if (darkSrc) {
        const isDarkMode =
          document.documentElement.getAttribute("data-theme") === "dark";
        setCurrentSrc(isDarkMode ? darkSrc : lightSrc);
      } else {
        setCurrentSrc(lightSrc);
      }
    };

    handleThemeChange();

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, [lightSrc, darkSrc]);

  return (
    <img
      style={{ borderRadius: "12px" }}
      src={currentSrc}
      height={height}
      width={width}
      alt={alt}
    />
  );
}
