import React from "react";
import "./panelItem.scss";
import { PanelLabel } from "./panelLabel";
import classNames from "classnames";

export const PanelItem = ({room, selected, disabled}) => {
  return <div className={classNames({selected, disabled}, "panel-item")}>
    <img className="panel-item-image" src="img\lightBulb.png" alt=""/>
    <p>{room.name}</p>
    <div>
        <PanelLabel isOn={room.active}/>
    </div>
  </div>;
};
