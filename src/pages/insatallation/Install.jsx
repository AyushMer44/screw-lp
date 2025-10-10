import React from "react";
import backgroundImage from "/assets/about/back.png";
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
          <h1 className={styles.title}>INSTALLATION</h1>
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
          <div className={styles.div1}>
            <img src="/assets/Process1/1.JPG" alt="1"/>
          </div>
          <div className={styles.div2}>
            <img src="/assets/Process1/2.JPG" alt="2"/>
          </div>
          <div className={styles.div3}>
            <img src="/assets/Process1/3.JPG" alt="3"/>
          </div>
          <div className={styles.div4}>
            <img src="/assets/Process1/4.JPG" alt="4"/>
          </div>
          <div className={styles.div5}>
            <img src="/assets/Process1/5.JPG" alt="5"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Install;
