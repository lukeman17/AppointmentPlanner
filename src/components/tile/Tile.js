import React from "react";

export const Tile = (props) => {
  console.log(props.contactTile);
  const object = props.contactTile;
  const propsObj = Object.values(object);

  const contactParra = propsObj.map((newContactParra, index) => {
    let className;
    if (index === 0) {
      className = "tile-title";
    } else {
      className = "tile";
    }
    return (
      <p key={index} className={className}>
        {newContactParra}
      </p>
    );
  });

  return <div className="tile-container">{contactParra}</div>;
};
