import React from "react";
import "./User.css";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";

function User() {
  return (
    <div className="user">
      <img
        src="./image/moi2.jpg"
        alt="user"
        width="100px"
        className="user-avatar"
      />
      <h1 className="user-name">Marc Richet</h1>
      <h3 className="user-profession">Développeur Front-end</h3>
      <div className="user-infos">
        <p className="user-info">
          <HomeIcon />
          1469 rue de las sorbes "La closerie du mas de Tesse" 34070 Montpellier
        </p>
        <p className="user-info">
          <PhoneIcon />
          <a href="tel:+330661934495">06 61 93 44 95</a>
        </p>
        <p className="user-info">
          <MailIcon />
          <a href="mailto:mrichet@protonmail.com">mrichet@protonmail.com</a>
        </p>
        <p className="user-info">
          <GitHubIcon />
          <a
            href="https://github.com/zicokiller"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/zicokiller
          </a>
        </p>
      </div>
    </div>
  );
}

export default User;
