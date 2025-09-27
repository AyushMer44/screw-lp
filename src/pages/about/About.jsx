import styles from "./About.module.scss";
import backgroundImage from "../../assets/about/about-wallpaper.png"; // adjust path accordingly
import OurTeam from "./ourTeam/OurTeam";

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

      <div className={styles.contentSection}>
        <div className={styles.topText}>
          Welcome to Rajog Ground Screw Company, the pioneering force in
          revolutionizing groundwork solutions in India. As the first
          manufacturers to scale up production of ground screws within the
          country, we have redefined efficiency and reliability in construction
          projects. At Rajog, Our commitment is to deliver top-notch quality
          through innovation and cutting-edge technology. Our state-of-the-art
          facilities boast fully automatic machines meticulously designed for
          precision and scale. By leveraging this advanced machinery, we’ve
          streamlined our production process, ensuring consistent quality and
          prompt delivery to meet the dynamic needs of our customers.
        </div>
        <div className={styles.cardRow}>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <img src="/src/assets/about/arrow.svg" alt="" />
            </div>
            <div className={styles.cardTitle}>Our Mission</div>
            <div className={styles.cardText}>
              To prioritize customer satisfaction by ensuring reliability,
              durability, and efficiency in every product we offer.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <img src="/src/assets/about/question-mark.svg" alt="" />
            </div>
            <div className={styles.cardTitle}>Why Big Screw</div>
            <div className={styles.cardText}>
              These innovative solutions facilitate faster installation,
              minimizing groundwork time by up to 70%.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <img src="/src/assets/about/telescope.svg" alt="" />
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
    </>
  );
};

export default About;
