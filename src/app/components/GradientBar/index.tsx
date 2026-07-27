import React, { useMemo } from "react";
import "./index.css";

const GradientBar: React.FC<{
  level?: string;
  colors?: string[];
  type?: string;
}> = ({ level = "0", colors = [], type = "uv" }) => {
  const resultBackground =
    colors.length > 0
      ? `linear-gradient(to right, ${colors.join(", ")})`
      : "linear-gradient(90deg,#84CC16 0%,#A3E635 20%,#FACC15 45%,#FB923C 65%,#EC4899 85%,#A855F7 100%)";

  const resultLeft = useMemo(() => {
    if (type === "aqi") {
      return `${(Number(level) / 500) * 100}%`;
    }
    if (type === "uv") {
      return `${(Number(level) / 15) * 100}%`;
    }
    return `${(Number(level) / 15) * 100}%`;
  }, [level, type]);

  return (
    <div className="gradient-bar" style={{ background: resultBackground }}>
      <div className="thumb" style={{ left: resultLeft }}></div>
    </div>
  );
};

export default GradientBar;
