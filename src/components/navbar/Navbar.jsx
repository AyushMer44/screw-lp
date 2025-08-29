import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img
            src="/src/assets/logo/logo.svg" // Replace with your actual logo path
            alt="Big Screw Foundation Logo"
            className={styles.navLogo}
          />
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#quality">Quality</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
