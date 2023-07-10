import React from "react";
import { BottomPanel } from "./bottomPanel/bottomPanel";
import "./hmi.scss";

export const Hmi = () => {
  return (
    <div
      className={"hmi"}
      style={{ backgroundImage: `url('./img/hmi_background.jpg')` }}
    >
      <BottomPanel />
    </div>
  );
};
