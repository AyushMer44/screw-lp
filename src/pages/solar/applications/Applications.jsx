import React from "react";
import styles from "./Applications.module.scss";

const Applications = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Applications</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="/assets/solar/solarFarms.jpg"
            alt="Solar Farms"
            className={styles.image}
          />
          <div className={styles.text}>Solar Farms</div>
          <div className={styles.overlay}>
            Scalable for large renewable energy projects.
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="/assets/solar/resident.jpg"
            alt="Residential Solar"
            className={styles.image}
          />

          <div className={styles.text}>Residential Solar</div>
          <div className={styles.overlay}>
            Perfect for ground-mounted home solar setups.
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="/assets/solar/uneven.jpg"
            alt="Uneven Terrain"
            className={styles.image}
          />
          <div className={styles.text}>Uneven Terrain</div>
          <div className={styles.overlay}>
            Installs easily on hilly or unstable land.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
