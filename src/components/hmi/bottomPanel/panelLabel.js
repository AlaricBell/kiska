import React from "react";
import "./panelLabel.scss";
import classNames from "classnames";

export const PanelLabel = ({isOn}) => {
  return <div className={classNames({active: isOn}, "label label-switch")}>
    {isOn ? "Turn off" : "Turn on"}
  </div>;
};