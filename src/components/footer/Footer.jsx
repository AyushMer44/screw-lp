import styles from "./Footer.module.scss";
import { FaFacebookF, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.top}>
      <div className={styles.logoBlock}>
        <img
          src="/src/assets/logo/big-screw-logo.png"
          alt="Big Screw Solutions Logo"
          className={styles.logoImg}
        />
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.heading}>ABOUT</div>
          <div className={styles.item}>Company</div>
          <div className={styles.item}>Company</div>
          <div className={styles.item}>Company</div>
        </div>
        <div className={styles.column}>
          <div className={styles.heading}>PRODUCT</div>
          <div className={styles.item}>Screw</div>
          <div className={styles.item}>Screw</div>
          <div className={styles.item}>Screw</div>
        </div>
        <div className={styles.column}>
          <div className={styles.heading}>BLOG</div>
          <div className={styles.item}>Blog 1</div>
          <div className={styles.item}>Blog 1</div>
          <div className={styles.item}>Blog 1</div>
        </div>
      </div>
      <div className={styles.socials}>
        <div className={styles.socialIcon}>
          <FaFacebookF />
        </div>
        <div className={styles.socialIcon}>
          <FaTwitter />
        </div>
        <div className={styles.socialIcon}>
          <FaGlobe />
        </div>
      </div>
    </div>
    <hr className={styles.divider} />
    <div className={styles.bottom}>
      <span className={styles.copyright}>
        &#169; 2025 Big Screw Foundation. All Rights Reserved
      </span>
    </div>
  </footer>
);

export default Footer;
