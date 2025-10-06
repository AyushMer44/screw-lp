import React from "react";
import styles from "./AboutSection.module.scss";
import { FaClock, FaDollarSign, FaLightbulb, FaRecycle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className={styles.groundScrewContainer}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Why Choose GroundScrew?</h2>
        <p className={styles.subText}>
          Ground screws are a modern, eco-friendly alternative to concrete
          foundations. Made from galvanized steel, they offer fast installation,
          high durability, and minimal environmental impact — making them ideal
          for both small and large construction projects.
        </p>
      </div>

      {/* Reasons Section */}
      <div className={styles.reasonsContainer}>
        <div className={styles.reasons}>
          <div className={styles.infoBox}>
            <div className={styles.iconCircle}>
              <FaClock className={styles.icon} />
            </div>
            <h4>Quick Installation</h4>
            <p>
              No waiting for concrete curing — install in minutes and start
              building immediately.
            </p>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconCircle}>
              <FaDollarSign className={styles.icon} />
            </div>
            <h4>Cost Effective</h4>
            <p>
              Save up to <strong>20%</strong> in total project costs through
              faster setup and higher efficiency.
            </p>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconCircle}>
              <FaLightbulb className={styles.icon} />
            </div>
            <h4>Smart Engineering</h4>
            <p>
              Designed to deliver strong, reusable, and stable foundations for
              any soil type.
            </p>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconCircle}>
              <FaRecycle className={styles.icon} />
            </div>
            <h4>Eco-Friendly</h4>
            <p>
              100% recyclable and reusable, with minimal ground disturbance and
              no concrete waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
