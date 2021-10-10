import React from "react";
import { SiRedux } from "react-icons/si";
import {
  FaGit,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import "./Skills.css";
import Skill from "./Skill";
import Interests from "./Interests";

function Skills() {
  return (
    <div>
      <div className="skills-custom">
        <div className="icons">
          <h2 className="h2">Compétences</h2>
          <FaHtml5 size={25} color="f06529" />
          <FaCss3 size={25} color="#264de4" />
          <DiJavascript1 size={25} color="#f0db4f" />
          <FaReact size={25} color="#61dbfb" />
          <SiRedux size={25} color="#764abc" />
          <FaVuejs size={25} color="#42b883" />
          <FaNodeJs size={25} color="#3c873a" />
          <FaGit size={25} color="#f34f29" />
        </div>
        <div className="rating">
          <Skill rating="5" />
          <Skill rating="4" />
          <Skill rating="4" />
          <Skill rating="4" />
          <Skill rating="4" />
          <Skill rating="3" />
          <Skill rating="3" />
          <Skill rating="4" />
        </div>
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>

        <Skill title="Anglais" rating="4" />
      </div>
      <Interests />
    </div>
  );
}

export default Skills;
