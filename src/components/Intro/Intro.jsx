import React from "react";
import styles from "./Intro.module.css";
import { FiUser, FiPhoneCall, FiMail } from "react-icons/fi";

function Intro() {
  return (
    <div className={styles.intro_wrapper}>
      <div className={styles.container}>
        <div className={styles.intro_con}>
          <div>
            <div className={styles.intro_img}></div>
          </div>
          <div className={styles.intro_info}>
            <p className={styles.text_1}>My Intro</p>
            <h3 className={styles.text_2}>About Me</h3>
            <p className={styles.text_3}>
            A project manager with expertise in resource coordination, procurement, and stakeholder communication, experienced in delivering projects on time and within budget. Currently seeking to transition into the tech industry, bringing strong management and collaboration skills to drive innovation and contribute to technology solutions.
            </p>
            <div className={styles.intro_social}>
              <ul>
                <li>
                  <a href="#">
                    <FiUser />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FiPhoneCall />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FiMail />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Name</a>
                </li>
                <li>
                  <a href="#">Phone</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
              </ul>
              <ul>
                <li>:</li>
                <li>:</li>
                <li>:</li>
              </ul>
              <ul>
                <li>Naphatsakorn Pornpanich</li>
                <li>091-7874059</li>
                <li>naphatfd@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
