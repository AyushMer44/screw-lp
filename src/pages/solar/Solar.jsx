import React from "react";
import backgroundImage from "../../assets/solar/solar.png"; // adjust path accordingly
import styles from "./Solar.module.scss";
import SolarContent from "./solarContent/SolarContent";

const Solar = () => {
  return (
    <div>
      <div className={styles.aboutUs}>
        <div
          className={styles.heroSection}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={styles.solarText}>
            <h1 className={styles.aboutTitle}>SOLAR</h1>
            <p>
              Ground screws offer fast, eco-friendly, and durable <br />
              solutions for solar panel installations
            </p>
          </div>

          <div className={styles.yellowBoxContainer}>
            <div className={styles.yellowBox}>
              <div>
                <img
                  src="/src/assets/home/yellowBox/clock-fast.svg"
                  alt=""
                  className={styles.clock}
                />
                <p>Fast & Easy</p>
              </div>
              <div>
                <img
                  src="/src/assets/home/yellowBox/money.svg"
                  alt=""
                  className={styles.money}
                />
                <p>Affordable</p>
              </div>
              <div>
                <img
                  src="/src/assets/home/yellowBox/sustainable.svg"
                  alt=""
                  className={styles.sustainable}
                />
                <p>Sustainable</p>
              </div>
              <div>
                <img
                  src="/src/assets/home/yellowBox/gear.svg"
                  alt=""
                  className={styles.gear}
                />
                <p>Customizable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <p>What are Solar Ground Screws?</p>
          </div>
          <div className={styles.description}>
            <p>
              Ground screws have emerged as the game-changer in the construction
              industry, offering a myriad of benefits over traditional methods.
              These innovative solutions facilitate faster installation,
              minimizing groundwork time by up to 70%. Their versatility spans
              across various terrains, from soft soil to rocky surfaces,
              providing unparalleled stability and durability. But the
              advantages don’t end there. Rajog Ground Screws epitomize
              eco-friendliness, as they require no excavation, preserving the
              integrity of the land. Their non-invasive installation process
              reduces environmental impact, making them the sustainable choice
              for modern construction projects.
            </p>
          </div>
        </div>
      </div>
      <SolarContent />
    </div>
  );
};

export default Solar;
