import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SecurityIcon from "@material-ui/icons/Security";
import PoolIcon from "@material-ui/icons/Pool";
import CodeIcon from "@material-ui/icons/Code";

function interests() {
  return (
    <div className="skills">
      <h2 className="h2">Centres d'intérêts</h2>
      <ul>
        <li>Musicien</li>
        <li>Cyber-sécurité</li>
        <li>Natation</li>
      </ul>
      <div className="interests">
        <MusicNoteIcon style={{ fontSize: 30 }} />
        <SecurityIcon style={{ fontSize: 30 }} />
        <PoolIcon style={{ fontSize: 30 }} />
        <CodeIcon style={{ fontSize: 30 }} />
      </div>
    </div>
  );
}

export default interests;
