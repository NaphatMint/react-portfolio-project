import React from "react";
import styles from "./Skills.module.css";
import {
  FaSquareJs,
  FaReact,
  FaSass,
  FaHtml5,
  FaGitAlt,
  FaNode,
  FaFigma,
} from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
function Skills() {
  return (
    <div>
      <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
          <li>
            <FaSquareJs />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <FaSass />
          </li>
          <li>
            <BiLogoTypescript  />
          </li>
          <li>
            <FaGitAlt />
          </li>
          <li>
            <FaNode />
          </li>
          <li>
            <FaFigma />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
