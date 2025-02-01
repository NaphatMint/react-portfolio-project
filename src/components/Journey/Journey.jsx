import React from "react";
import styles from "./Journey.module.css";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

function Journey() {
  return (
    <div className={styles.qualification_wrapper}>
      <p className={styles.subtitle}>My Qualification</p>
      <p className={styles.title}>Awesome Journey</p>

      <div className={styles.content}>
        {/* Education Section */}
        <div className={styles.section}>
          <div className={styles.heading}>
            <FaGraduationCap className={styles.icon} /> Education
          </div>
          <div className={styles.item}>
            <div className={styles.timeline}></div>
            <div>
              <h3>Higher Vocational Certificate</h3>
              <p>Information Technology</p>
              <span className={styles.date}>
                <FaCalendarAlt /> 2013 - 2015
              </span>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.timeline}></div>
            <div>
              <h3>Vocational Certificate</h3>
              <p>Business Computer</p>
              <span className={styles.date}>
                <FaCalendarAlt /> 2010 - 2013
              </span>
            </div>
          </div>
          <div className={styles.item}>
          </div>
        </div>

        {/* Experience Section */}
        <div className={styles.section}>
          <div className={styles.heading}>
            <FaBriefcase className={styles.icon} /> Experience
          </div>
          <div className={styles.item}>
            <div className={styles.timeline}></div>
            <div>
              <h3>Bangkok Chain Dental Co., Ltd.</h3>
              <p>General Manager</p>
              <span className={styles.date}>
                <FaCalendarAlt /> 2024 - 2024
              </span>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.timeline}></div>
            <div>
              <h3>Nawa Intertech Co., Ltd.</h3>
              <p>Purchasing Staff</p>
              <span className={styles.date}>
                <FaCalendarAlt /> 2021 - 2024
              </span>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.timeline}></div>
            <div>
              <h3>SK Machine & Welding Limited Partnership</h3>
              <p>Assistant Manager</p>
              <span className={styles.date}>
                <FaCalendarAlt /> 2017 - 2020
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
