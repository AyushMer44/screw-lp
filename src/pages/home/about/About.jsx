import styles from "./About.module.scss";
const About = () => {
  const screwPoints = [
    {
      title: "YEAR ROUND SOLUTION",
      description:
        "Reliable performance in all seasons and weather conditions. Ground screws maintain their structural integrity regardless of temperature fluctuations or seasonal changes.",
    },
    {
      title: "ENVIRONMENTALLY FRIENDLY",
      description:
        "Eco-conscious design with minimal environmental impact. No concrete waste, reduced carbon footprint, and fully reversible installation process.",
    },
    {
      title: "IMMEDIATELY LOADABLE",
      description:
        "Ready to support loads immediately after installation. No waiting time for concrete to cure - structures can be built right away.",
    },
    {
      title: "NO CONCRETE & NO EXCAVATION",
      description:
        "Installation without heavy groundwork or concrete pouring. Simple screw-in process eliminates the need for digging and mixing concrete.",
    },
    {
      title: "PERMANENT & REUSABLE",
      description:
        "Durable and reusable for multiple projects over time. Can be easily removed and reinstalled in new locations without damage.",
    },
    {
      title: "COST EFFECTIVE",
      description:
        "Offers significant cost savings compared to traditional methods. Reduces labor costs, material expenses, and installation time.",
    },
  ];

  return (
    <div className={styles.about}>
      <p className={styles.aboutText}>ABOUT</p>
      <div className={styles.content}>
        <div className={styles.heading}>
          <p>Ground screws secure structures better than concrete</p>
        </div>
        <div className={styles.description}>
          <p>
            If you’ve worked with ground screws before, chances are we made
            them. We were one of the world’s first manufacturers of the
            technology and we continue to set the global standard for quality
            and performance. Our approach is built on collaboration: we share
            our knowledge and best practices with an international network of
            engineers, manufacturers, and building professionals. Our attention
            to detail and focused collaboration allows us to offer reliable,
            reputable solutions supported by our expert services. American
            Ground Screw is just not ground anchors and anchor screws; we are
            also a resource of knowledge and advancement for all those seeking
            up-to-code engineering solutions
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/src/assets/home/Frame 49.png" alt="" />
        </div>
        <div className={styles.screwPointsContainer}>
          {screwPoints.map((point, index) => (
            <div key={index} className={styles.screwPoint}>
              <div className={styles.screwImage}>
                <img src="/src/assets/home/screwLogo.svg" alt="" />
              </div>
              <div>
                <h4 className={styles.screwTitle}>{point.title}</h4>
                <p className={styles.screwDescription}>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
