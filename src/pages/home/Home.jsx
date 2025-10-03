import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../components/navbar/Navbar";
import About from "./about/About";
import Testimonials from "./testimonials/Testimonials";
import FAQ from "./FAQ/FAQ";
import StatsSection from "./Stats/StatsSection";
import Footer from "../../components/footer/Footer";
import Clock from "../../assets/home/yellowBox/clock-fast.svg"
import Money from "../../assets/home/yellowBox/money.svg"
import Sustainable from "../../assets/home/yellowBox/sustainable.svg"
import Gear from "../../assets/home/yellowBox/gear.svg"

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.heading}>
          BIG <span> SCREW</span>
          COMPANY <br /> FOUNDATION
        </div>
        <div className={styles.description}>
          Big Screw Company, the pioneering force in revolutionizing groundwork
          solutions in India. As the first <br />
          manufacturers to scale up production of ground screws within the
          country, we have redefined <br /> efficiency and reliability in
          construction projects
        </div>
      </div>
      <div className={styles.yellowBoxContainer}>
        <div className={styles.yellowBox}>
          <div>
            <img
              src={Clock}
              alt=""
              className={styles.clock}
            />
            <p>Fast & Easy</p>
          </div>
          <div>
            <img
              src={Money}
              alt=""
              className={styles.money}
            />
            <p>Affordable</p>
          </div>
          <div>
            <img
              src={Sustainable}
              alt=""
              className={styles.sustainable}
            />
            <p>Sustainable</p>
          </div>
          <div>
            <img
              src={Gear}
              alt=""
              className={styles.gear}
            />
            <p>Customizable</p>
          </div>
        </div>
      </div>
      <About />
      <FAQ />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Home;
