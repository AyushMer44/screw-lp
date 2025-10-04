import styles from "./Footer.module.scss";
import { FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

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
                  src="/src/assets/logo/big-screw-logo.png"
                  alt="Big Screw Solutions Logo"
                  className={styles.logoImg}
              />
              <p className={styles.tagline}>Building Foundations That Last</p>
            </div>

            <div className={styles.columns}>
              <div className={styles.column}>
                <div className={styles.heading}>QUICK LINKS</div>
                <div className={styles.item}>Let Us Help You</div>
                <div className={styles.item}>Privacy Policy</div>
                <div className={styles.item}>Terms and Conditions</div>
                <div className={styles.item} onClick={() => handleNavigation('/products')}>Products</div>
                <div className={styles.item} onClick={() => handleNavigation('/contact')}>Contact Us</div>
              </div>

              <div className={styles.column}>
                <div className={styles.heading}>HEAD OFFICE</div>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.icon}/>
                  <span>R, 413, Rabale MIDC Rd, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701</span>
                </div>
                <div className={styles.contactItem}>
                  <FaPhoneAlt className={styles.icon}/>
                  <div className={styles.contactDetails}>
                    <div>Harjith Saini: +91 98200 16129</div>
                    <div>Karandeep Saini: +91 99879 95568</div>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.icon}/>
                  <span>contact@rajoggroundscrew.com</span>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.heading}>MIDDLE EAST OFFICE</div>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.icon}/>
                  <span>AL Maedah General Trading (LL.C), Saeed Ejtebi Building, Unit # 5, Behind Ducati showroom, 32 6A Street, AL Quoz Industrial Area 3, Dubai, U.A.E</span>
                </div>
                <div className={styles.contactItem}>
                  <FaPhoneAlt className={styles.icon}/>
                  <span>Relina: +971 50 518 3361</span>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.icon}/>
                  <span>relina@amgt.me</span>
                </div>
              </div>
            </div>

            <div className={styles.socials}>
              <div className={styles.heading}>CONNECT</div>
              <a href="https://www.linkedin.com/company/rajog-groundscrew-india/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaLinkedinIn/>
              </a>
            </div>
          </div>

          <hr className={styles.divider}/>

          <div className={styles.bottom}>
      <span className={styles.copyright}>
        © 2025 Rajog Ground Screw. All Rights Reserved
      </span>
          </div>
        </footer>
    )
};

export default Footer;