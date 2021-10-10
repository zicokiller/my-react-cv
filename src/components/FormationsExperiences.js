import React from "react";
import "./FormationsExperiences.css";
import dataFormations from "../datas/Formations";
import Formations from "./Formations";
import dataExperiences from "../datas/Experiences";
import Experiences from "./Experiences";

function FormationsExperiences() {
  return (
    <div>
      <Formations datas={dataFormations} />
      <Experiences datas={dataExperiences} />
    </div>
  );
}

export default FormationsExperiences;
