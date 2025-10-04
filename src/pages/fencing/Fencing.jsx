import React from "react";
import styles from "./Fencing.module.scss";
import backgroundImage from "../../assets/about/about-wallpaper.png";
import First from "../../assets/home/about/Home1.png";
import Second from "../../assets/home/Fencing.png";
import Third from "../../assets/home/Mount.png";
import Footer from "../../components/footer/Footer.jsx";

const Fencing = () => {
    return (
        <>
            <div className={styles.fencing}>
                <div
                    className={styles.heroSection}
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <h1 className={styles.fencingTitle}>FENCING</h1>
                    <p className={styles.subtitle}>
                        Strong, Quick & Reliable Fencing Foundations
                    </p>
                </div>

                <div className={styles.introSection}>
                    <p className={styles.introText}>
                        Groundscrews are the modern alternative to concrete for fence posts,
                        offering a faster, cleaner, and more sustainable solution. Whether
                        for residential boundaries, agricultural fencing, or industrial
                        perimeters, they ensure durability with minimal effort.
                    </p>
                </div>

                <div className={styles.advantagesSection}>
                    <h2>Key Advantages</h2>
                    <div className={styles.advantagesGrid}>
                        <div className={styles.advantageCard}>
                            <div className={styles.iconWrapper}>
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2L2 7L12 12L22 7L12 2Z"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 17L12 22L22 17"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 12L12 17L22 12"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>Fast Installation</h3>
                            <p>Screw directly into the ground with no curing time.</p>
                        </div>

                        <div className={styles.advantageCard}>
                            <div className={styles.iconWrapper}>
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M8 12L11 15L16 9"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>No Digging, No Mess</h3>
                            <p>Avoids excavation and concrete handling.</p>
                        </div>

                        <div className={styles.advantageCard}>
                            <div className={styles.iconWrapper}>
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.5 2V16.5M21.5 16.5L18 13M21.5 16.5L21.5 20.5"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.5 22V7.5M2.5 7.5L6 11M2.5 7.5V3.5"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>Reusable & Relocatable</h3>
                            <p>Unscrew and move if the fence line changes.</p>
                        </div>

                        <div className={styles.advantageCard}>
                            <div className={styles.iconWrapper}>
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 20L9 14L13 18L21 10"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21 4V10H15"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>All Terrain Ready</h3>
                            <p>Works in soil, clay, gravel, or uneven terrain.</p>
                        </div>

                        <div className={styles.advantageCard}>
                            <div className={styles.iconWrapper}>
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                                        fill="#F9C50D"
                                    />
                                    <path
                                        d="M17 8L12 3L7 8"
                                        stroke="#F9C50D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>Eco-Friendly</h3>
                            <p>Minimal ground disturbance, fully recyclable steel.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.processSection}>
                    <h2>How Do They Work?</h2>
                    <div className={styles.processSteps}>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Screw Into Ground</h3>
                                <p>
                                    Installed with hydraulic drivers or manual tools directly into
                                    soil, no digging or concrete needed.
                                </p>
                            </div>
                            <div className={styles.stepImage}>
                                {/* Placeholder for image */}
                                <div className={styles.imagePlaceholder}>
                                    <img src={First} alt="First"/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Secure Fence Posts</h3>
                                <p>
                                    Strong steel helical design locks the fence post in place,
                                    resisting wind and lateral loads.
                                </p>
                            </div>
                            <div className={styles.stepImage}>
                                <div className={styles.imagePlaceholder}>
                                    <img src={Second} alt="Second"/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Mount Fencing</h3>
                                <p>
                                    Panels, rails, or mesh attach easily to the adapter plate or
                                    brackets on the screw tops.
                                </p>
                            </div>
                            <div className={styles.stepImage}>
                                <div className={styles.imagePlaceholder}>
                                    <img src={Third} alt="Third"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Fencing;