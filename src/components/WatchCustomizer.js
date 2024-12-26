import React, { useState } from "react";
import "./WatchCustomizer.css";

const WatchCustomizer = () => {
  const [caseColor, setCaseColor] = useState("Silver");
  const [bandStyle, setBandStyle] = useState("Sport");
  const [bandColor, setBandColor] = useState("White");

  return (
    <div className="watch-customizer">
      <h2>Customize Your Watch</h2>
      <div className="preview">
        <div className={`watch-case ${caseColor.toLowerCase()}`}>
          <div className={`watch-band ${bandStyle.toLowerCase()} ${bandColor.toLowerCase()}`} />
        </div>
      </div>
      <div className="controls">
        <div>
          <label>Case Color:</label>
          <select value={caseColor} onChange={(e) => setCaseColor(e.target.value)}>
            <option>Silver</option>
            <option>Space Gray</option>
            <option>Gold</option>
          </select>
        </div>
        <div>
          <label>Band Style:</label>
          <select value={bandStyle} onChange={(e) => setBandStyle(e.target.value)}>
            <option>Sport</option>
            <option>Leather</option>
            <option>Metal</option>
          </select>
        </div>
        <div>
          <label>Band Color:</label>
          <select value={bandColor} onChange={(e) => setBandColor(e.target.value)}>
            <option>White</option>
            <option>Black</option>
            <option>Blue</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default WatchCustomizer;
