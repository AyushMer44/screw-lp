import styles from "./Footer.module.scss";
import {
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.logoBlock}>
            <img
                src="/assets/logo/big-screw-logo1.png"
                alt="Big Screw Solutions Logo"
                className={styles.logoImg}
            />
            <p className={styles.tagline}>Building Foundations That Last</p>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <div className={styles.heading}>QUICK LINKS</div>
              <div
                  className={styles.item}
                  onClick={() => handleNavigation("/privacyPolicy")}
              >
                Privacy Policy
              </div>
              <div
                  className={styles.item}
                  onClick={() => handleNavigation("/termsAndConditions")}
              >
                Terms and Conditions
              </div>
              <div
                  className={styles.item}
                  onClick={() => handleNavigation("/products")}
              >
                Products
              </div>
              <div
                  className={styles.item}
                  onClick={() => handleNavigation("/contact")}
              >
                Contact Us
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.heading}>HEAD OFFICE</div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <span>
                R, 413, Rabale MIDC Rd, MIDC Industrial Area, Rabale, Navi
                Mumbai, Maharashtra 400701
              </span>
              </div>
              <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.icon} />
                <div className={styles.contactDetails}>
                  <span>Karandeep Saini: +91 99879 95568</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <span>contact@bigscrew.com</span>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.heading}>CONNECT</div>
              <div className={styles.socialLinks}>
                <a
                    href="https://www.linkedin.com/company/rajog-groundscrew-india/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                    href="https://www.instagram.com/bigscrew.solutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
        <span className={styles.copyright}>
          © 2025 Big Screw Solutions. All Rights Reserved
        </span>
        </div>
      </footer>
  );
};

export default Footer;