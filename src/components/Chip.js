import React from "react";
import Chip from "@material-ui/core/Chip";

function addChip({ name, icon, color, size, root }) {
  return (
    <div className={root}>
      <Chip label={name} icon={icon} color="primary" size="small" />
    </div>
  );
}

export default addChip;
