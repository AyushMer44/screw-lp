import styles from "./About.module.scss";
import Home from "../../../assets/home/about/Home.png";
import Home1 from "../../../assets/home/about/Home1.png";
import Home2 from "../../../assets/home/about/Home2.png";
import Home3 from "/assets/home/drill.jpeg";
import Home4 from "/assets/home/about.JPG";

const About = () => {
  const screwPoints = [
    {
      title: "Year-Round Installation:",
      description: "Works in all seasons and soil types — no weather delays.",
      img: "/assets/home/calendra.svg",
    },
    {
      title: "Eco-Friendly Choice:",
      description: "Zero concrete, zero excavation, minimal environmental impact.",
      img: "/assets/home/plant.svg",
    },
    {
      title: "Cost-Effective:",
      description: "Save on time, materials, and labor with reusable foundation systems.",
      img: "/assets/home/save-money.svg",
    },
    {
      title: "Instant Load Capacity:",
      description: "Install today, build today — no curing, no downtime.",
      img: "/assets/home/calendra.svg",
    },
    {
      title: "Precision Engineered:",
      description:
          "Manufactured using 6kW laser cutting, CNC bending, and automated welding — ensuring consistent quality every time.",
      img: "/assets/home/concrete.svg",
    },
  ];

  return (
      <div className={styles.about}>
        <p className={styles.aboutText}>ABOUT</p>

        {/* First Section - Building the Future */}
        <div className={styles.buildingSection}>
          <h2 className={styles.buildingHeading}>
            Building the Future, Beyond Concrete
          </h2>
          <p className={styles.buildingDescription}>
            At BigScrew Solutions, we believe the foundation of{" "}
            <span className={styles.highlight}>future</span> shouldn't rely on
            outdated methods. With over four decades of manufacturing experience
            and cutting-edge automation, we've engineered India's first
            large-scale ground screw production system — delivering speed,
            strength, and sustainability in every foundation.
          </p>
          <p className={styles.buildingDescription}>
            From solar projects to modular buildings, we're helping industries
            across the world ditch concrete and build smarter.
          </p>
        </div>

        {/* Two Column Grid: Images Left, Screw Points Right */}
        <div className={styles.content}>
          {/* Image Grid - Left Column */}
          <div className={styles.imageContainer}>
            <div className={`${styles.item} ${styles.tall}`}>
              <img src={Home} alt="Tall" />
            </div>

            <div className={`${styles.item} ${styles.leftBottom}`}>
              <img src={Home1} alt="Left Bottom" />
            </div>

            <div className={styles.item}>
              <img src={Home3} alt="Right Top" />
            </div>

            <div className={styles.item}>
              <img src={Home2} alt="Right Middle" />
            </div>

            <div className={styles.item}>
              <img src={Home4} alt="Right Bottom" />
            </div>
          </div>

          {/* Why Ground Screws Section - Right Column */}
          <div className={styles.screwPointsContainer}>
            <div className={styles.whyGroundScrews}>
              <p className={styles.whyTitle}>WHY GROUND SCREWS</p>
              <h3 className={styles.whyHeading}>Smarter. Faster. Greener. Stronger.</h3>
              <p className={styles.whyDescription}>
                Our technology replaces the slow, messy, and carbon-heavy process of
                concrete foundations with precision-engineered ground screws that
                work anywhere, anytime.
              </p>
            </div>

            {screwPoints.map((point, index) => (
                <div key={index} className={styles.screwPoint}>
                  <div className={styles.screwImage}>
                    <img src={point.img} alt="" />
                  </div>
                  <div>
                    <h4 className={styles.screwTitle}>{point.title}</h4>
                    <p className={styles.screwDescription}>{point.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Our Promise Section */}
        <div className={styles.promiseSection}>
          <h3 className={styles.promiseHeading}>
            <span className={styles.promiseBullet}>●</span> OUR PROMISE
          </h3>
          <p className={styles.promiseText}>
            Every BigScrew foundation is built to last — combining{" "}
            <span className={styles.promiseHighlight}>engineering accuracy</span>,{" "}
            <span className={styles.promiseHighlight}>environmental responsibility</span>,
            and <span className={styles.promiseHighlight}>global performance standards</span>.
          </p>
          <p className={styles.promiseTagline}>
            We don't just make screws; we create{" "}
            <span className={styles.promiseHighlight}>the foundation of the future</span>.
          </p>
        </div>
      </div>
  );
};

export default About;