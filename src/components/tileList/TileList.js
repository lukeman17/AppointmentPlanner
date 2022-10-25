import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  console.log(props);
  const tiles = props.object?.map((contactTile, index) => (
    <Tile contactTile={contactTile} key={index} />
  ));

  return <div>{tiles}</div>;
};
