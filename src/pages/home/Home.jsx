import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../components/navbar/Navbar";
import About from "./about/About";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.heading}>
          BIG <span> SCREW</span>
          <br /> COMPANY <br /> FOUNDATION
        </div>
        <div className={styles.description}>
          Big Screw Company, the pioneering force in <br /> revolutionizing
          groundwork solutions in India. As the <br /> first manufacturers to
          scale up production of ground <br /> screws within the country, we
          have redefined <br /> efficiency and reliability in construction
          projects
        </div>
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
      <About />
      <Testimonials />
    </div>
  );
};

export default Home;
