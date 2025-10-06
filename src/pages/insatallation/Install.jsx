import React from "react";
import backgroundImage from "../../assets/about/about-wallpaper.png";
import styles from "./Install.module.scss";
import Footer from "../../components/footer/Footer";

const Install = () => {
  return (
    <div>
      <div className={styles.install}>
        <div
          className={styles.heroSection}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={styles.overlay} />
          <h1 className={styles.title}>Installation</h1>
        </div>
      </div>

      <div className={styles.contentSection}>
        <h2 className={styles.subtitle}>Glimpse Of Installation</h2>

        <div className={styles.imageGrid}>
          <div className={styles.div1}>
            <img src="/assets/installation/1.jpg" alt="1" />
          </div>
          <div className={styles.div2}>
            {" "}
            <img src="/assets/installation/2.jpg" alt="1" />
          </div>
          <div className={styles.div3}>
            {" "}
            <img src="/assets/installation/3.jpg" alt="1" />
          </div>
          <div className={styles.div4}>
            {" "}
            <img src="/assets/installation/4.jpg" alt="1" />
          </div>
          <div className={styles.div5}>
            {" "}
            <img src="/assets/installation/5.jpg" alt="1" />
          </div>
        </div>
      </div>

      <div className={styles.contentSection}>
        <h2 className={styles.subtitle}>PROCESS</h2>

        <div className={styles.imageGrid}>
          <div className={styles.div1}>1</div>
          <div className={styles.div2}>2</div>
          <div className={styles.div3}>3</div>
          <div className={styles.div4}>4</div>
          <div className={styles.div5}>5</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Install;
