import React from "react";
import "./index.css"; // import styles

const GlareHover = ({
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.3,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
}) => {
  const style = {
    "--gh-rgba": `${glareColor}${Math.round(glareOpacity * 255)
      .toString(16)
      .padStart(2, "0")}`, // rgba in hex
    "--gh-angle": `${glareAngle}deg`,
    "--gh-size": `${glareSize}px`,
    "--gh-duration": `${transitionDuration}ms`,
  };

  return (
    <div
      className={`glare-hover ${playOnce ? "glare-hover--play-once" : ""}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlareHover;
