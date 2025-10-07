import styles from "./About.module.scss";
import backgroundImage from "/assets/about/back.png"; // adjust path accordingly
import Arrow from "../../assets/about/arrow.svg"; // adjust path accordingly
import QuestionMark from "../../assets/about/question-mark.svg"; // adjust path accordingly
import Telescope from "../../assets/about/telescope.svg"; // adjust path accordingly
import OurTeam from "./ourTeam/OurTeam";
import AboutSection from "./aboutSection/AboutSection";
import Footer from "../../components/footer/Footer";
import NewSection from "./newSection/NewSection.jsx";

const About = () => {
  return (
    <>
      <div className={styles.aboutUs}>
        <div
          className={styles.heroSection}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={styles.overlay} />
          <h1 className={styles.aboutTitle}>ABOUT US</h1>
        </div>
      </div>

      <NewSection/>
      <div className={styles.contentSection}>
        {/*<div className={styles.topText}>*/}
        {/*  Welcome to <strong> BIGSCREW SOLUTIONS</strong> — India’s largest manufacturer*/}
        {/*  of ground screws and accessories. With over four decades of experience*/}
        {/*  in sheet metal component manufacturing, machining, and bulk*/}
        {/*  fabrication, we have become a trusted partner for durable and*/}
        {/*  sustainable foundation solutions. <br />*/}
        {/*  <br />*/}
        {/*  As the first Indian company to scale up ground screw production,*/}
        {/*  <strong> BIGSCREW SOLUTIONS</strong> leads the industry with a blend of*/}
        {/*  innovation, automation, and quality. Our in-house facilities include*/}
        {/*  <strong>*/}
        {/*    {" "}*/}
        {/*    3KW & 6KW laser cutting machines, CNC bending, rotary swagging, and*/}
        {/*    automatic spiral and nut welding systems*/}
        {/*  </strong>*/}
        {/*  , ensuring complete automation and precision in every screw we*/}
        {/*  produce.*/}
        {/*  <br />*/}
        {/*  <br />*/}
        {/*  We manufacture screws ranging from{" "}*/}
        {/*  <strong>70mm to 100mm diameter</strong>, with thicknesses of{" "}*/}
        {/*  <strong>2mm to 5mm</strong> and lengths up to <strong>3000mm</strong>,*/}
        {/*  designed to support diverse soil and structural requirements. Our*/}
        {/*  current production capacity stands at{" "}*/}
        {/*  <strong>5,000–8,000 ground screws monthly</strong>, with the ability*/}
        {/*  to double within 30 days to meet project demand.*/}
        {/*</div>*/}
        <div className={styles.cardRow}>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <img src={Arrow} alt="" />
            </div>
            <div className={styles.cardTitle}>Our Mission</div>
            <div className={styles.cardText}>
              To prioritize customer satisfaction by ensuring reliability,
              durability, and efficiency in every product we offer.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <img src={QuestionMark} alt="" />
            </div>
            <div className={styles.cardTitle}>Why Big Screw</div>
            <div className={styles.cardText}>
              These innovative solutions facilitate faster installation,
              minimizing groundwork time by up to 70%.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <img src={Telescope} alt="" />
            </div>
            <div className={styles.cardTitle}>Our Commitment</div>
            <div className={styles.cardText}>
              Each of our ground screws undergoes rigorous quality checks,
              adhering to the highest industry standards.
            </div>
          </div>
        </div>
      </div>
      <OurTeam />
      <AboutSection />
      <Footer />
    </>
  );
};

export default About;
