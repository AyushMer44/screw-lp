import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scroll is enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  return (
    <>
      <div className={styles.logo}>
        <img
          src="/src/assets/logo/Mask group.png"
          alt="Big Screw Foundation Logo"
          className={styles.navLogo}
        />
      </div>
      <nav className={styles.navbar}>
        {/* */}
        <div className={styles.navbarContainer}>
          <ul className={styles.navLinks}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/solar">Solar</a>
            </li>
            <li>
              <a href="#about">Fencing</a>
            </li>
            <li>
              <a href="#about">Housing</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/installation">Installation</a>
            </li>{" "}
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>

          {/* Hamburger menu button */}
          <div
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
      >
        <button className={styles.closeButton} onClick={closeMenu}>
          ×
        </button>
        <ul>
          <li>
            <a href="/" onClick={handleLinkClick}>Home</a>
          </li>
          <li>
            <a href="/about" onClick={handleLinkClick}>About Us</a>
          </li>
          <li>
            <a href="/solar" onClick={handleLinkClick}>Solar</a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>Fencing</a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>Housing</a>
          </li>
          <li>
            <a href="/products" onClick={handleLinkClick}>Products</a>
          </li>
          <li>
            <a href="/installation" onClick={handleLinkClick}>Installation</a>
          </li>
          {" "}
          <li>
            <a href="/contact" onClick={handleLinkClick}>Contact Us</a>
          </li>
        </ul>
      </div>

      <div className={styles.screw}>
        <img src="/src/assets/logo/Screw.png" alt="" />
      </div>
    </>
  );
};

export default Navbar;
