import styles from "./About.module.scss";
import Home from "../../../assets/home/about/Home.png"
import Home1 from "../../../assets/home/about/Home1.png"
import Home2 from "../../../assets/home/about/Home2.png"
import Home3 from "../../../assets/home/about/Home3.png"
import Home4 from "../../../assets/home/about/Home5.png"
const About = () => {
  const screwPoints = [
    {
      title: "YEAR ROUND SOLUTION",
      description:
        "Ground screws can be installed in any weather and on almost all soil types. They eliminate delays caused by seasonal restrictions, ensuring projects can continue smoothly year-round.",
      img: "/src/assets/home/about/calendra.svg",
    },
    {
      title: "ENVIRONMENTALLY FRIENDLY",
      description:
        "No concrete, no heavy excavation, and minimal soil disturbance. Ground screws reduce carbon footprint and preserve the natural landscape, making them a sustainable foundation choice.",
      img: "/src/assets/home/about/plant.svg",
    },
    {
      title: "IMMEDIATELY LOADABLE",
      description:
        "Once installed, ground screws are ready to bear load instantly—no curing time required. This makes construction faster and more efficient compared to traditional foundations.",
      img: "/src/assets/home/about/calendra.svg",
    },
    {
      title: "NO CONCRETE & NO EXCAVATION",
      description:
        "Ground screws require no digging or pouring concrete. This means less mess, less noise, and no waiting time, while avoiding damage to the surrounding environment.",
      img: "/src/assets/home/about/concrete.svg",
    },
    {
      title: "COST EFFECTIVE",
      description:
        "By saving time, labor, and materials, ground screws significantly reduce overall project costs. Their reusability also adds long-term value compared to conventional foundations.",
      img: "/src/assets/home/about/save-money.svg",
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
          <div className={`${styles.item} ${styles.tall}`}>
            <img src={Home} alt="Tall"/>
          </div>

          <div className={`${styles.item} ${styles.leftBottom}`}>
            <img src={Home1} alt="Left Bottom"/>
          </div>

          <div className={styles.item}>
            <img src={Home3} alt="Right Top"/>
          </div>

          <div className={styles.item}>
            <img src={Home2} alt="Right Middle"/>
          </div>

          <div className={styles.item}>
            <img src={Home4} alt="Right Bottom"/>
          </div>
        </div>

        <div className={styles.screwPointsContainer}>
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
    </div>
  );
};

export default About;
