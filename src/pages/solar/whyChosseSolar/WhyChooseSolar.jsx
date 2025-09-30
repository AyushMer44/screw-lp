import React from "react";
import styles from "./WhyChooseSolar.module.scss";
import { FaCheck, FaCheckCircle, FaTimes, FaTimesCircle } from "react-icons/fa";

const WhyChooseSolar = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Why Choose Solar Ground Screws?</h2>

      <div className={styles.cards}>
        {/* Pros Card */}
        <div className={`${styles.card} ${styles.pros}`}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <FaCheck className={styles.iconCheck} />
            </div>
            <span>Pros</span>
          </div>
          <div className={styles.section}>
            <h3 className={styles.heading}>Big Screws</h3>
            <ul>
              <li>Quick installation: no curing time</li>
              <li>Eco-friendly &amp; minimal soil disruption</li>
              <li>Reusable and recyclable steel</li>
              <li>Works on uneven or rocky terrain</li>
            </ul>
          </div>
        </div>

        {/* Cons Card */}
        <div className={`${styles.card} ${styles.cons}`}>
          <div className={styles.header}>
            <div className={styles.iconCrossWrapper}>
              <FaTimes className={styles.iconCross} />
            </div>
            <span>Cons</span>
          </div>
          <div className={styles.section}>
            <h3 className={styles.heading}>Concrete</h3>
            <ul>
              <li>Time-consuming curing process</li>
              <li>High carbon footprint</li>
              <li>Difficult to remove or reuse</li>
              <li>Less adaptable to varied soil conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSolar;
