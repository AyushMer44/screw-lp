import styles from "./SolarContent.module.scss";

import screwIcon from "../../../assets/solar/picon_screw.svg";
import lockIcon from "../../../assets/solar/lock.svg";
import mountIcon from "../../../assets/solar/down-arrow.svg";

const CARD_CONTENT = [
  {
    icon: screwIcon,
    title: "1. Screw Into Ground",
    subtitle: "Installed with special machinery without concrete.",
  },
  {
    icon: lockIcon,
    title: "2. Secure Foundation",
    subtitle: "Helical design provides stability against load & wind.",
  },
  {
    icon: mountIcon,
    title: "3. Mount Panels",
    subtitle: "Solar racking systems attach easily to the screw tops.",
  },
];

const SolarContent = () => (
  <div className={styles.solarContentWrapper}>
    <h2 className={styles.heading}>How Do They Work?</h2>
    <div className={styles.cardRow}>
      {CARD_CONTENT.map((c, idx) => (
        <div className={styles.card} key={idx}>
          <div className={styles.iconCircle}>
            <img src={c.icon} alt="" />
          </div>
          <div className={styles.cardTitle}>{c.title}</div>
          <div className={styles.cardSubtitle}>{c.subtitle}</div>
        </div>
      ))}
    </div>
  </div>
);

export default SolarContent;
