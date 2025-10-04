import React from "react";
import styles from "./Housing.module.scss";
import backgroundImage from "../../assets/about/about-wallpaper.png";
import Footer from "../../components/footer/Footer.jsx";

const Housing = () => {
    return (
        <>
            <div className={styles.housing}>
                <div
                    className={styles.heroSection}
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <h1 className={styles.housingTitle}>HOUSING</h1>
                    <p className={styles.subtitle}>
                        Solid Foundations for Modern Living Spaces
                    </p>
                </div>

                <div className={styles.introSection}>
                    <p className={styles.introText}>
                        Ground screws provide a revolutionary foundation solution for residential
                        construction, offering speed, sustainability, and stability. From tiny homes
                        and modular housing to extensions and garden rooms, ground screws deliver
                        reliable support without the cost and environmental impact of traditional concrete.
                    </p>
                </div>

                <div className={styles.advantagesSection}>
                    <h2>Why Choose Ground Screws for Housing?</h2>
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
                            <h3>Rapid Installation</h3>
                            <p>Foundation ready in hours, not weeks. Start building the same day.</p>
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
                                        d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 22V12"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3 7L12 12L21 7"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>Cost-Effective</h3>
                            <p>Reduce labor, material, and excavation costs significantly.</p>
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
                                    <circle cx="12" cy="12" r="10" stroke="#F9C50D" strokeWidth="2"/>
                                    <path d="M12 6V12L16 14" stroke="#F9C50D" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3>All-Weather Construction</h3>
                            <p>Install year-round, even in cold or wet conditions.</p>
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
                                        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9 22V12H15V22"
                                        stroke="#F9C50D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3>Minimal Site Disruption</h3>
                            <p>No heavy machinery, excavation, or concrete trucks required.</p>
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
                                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
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
                            <h3>Sustainable Solution</h3>
                            <p>Eco-friendly, removable, and reusable with zero concrete waste.</p>
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
                                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#F9C50D" strokeWidth="2"/>
                                    <path d="M9 9L15 15M15 9L9 15" stroke="#F9C50D" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3>Versatile Applications</h3>
                            <p>Perfect for cabins, extensions, decks, and modular homes.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.applicationsSection}>
                    <h2>Perfect For</h2>
                    <div className={styles.applicationsList}>
                        <div className={styles.applicationItem}>
                            <div className={styles.applicationIcon}>🏡</div>
                            <h3>Tiny Homes & Cabins</h3>
                            <p>Quick, stable foundations for off-grid and mobile living.</p>
                        </div>
                        <div className={styles.applicationItem}>
                            <div className={styles.applicationIcon}>🏠</div>
                            <h3>Home Extensions</h3>
                            <p>Add space without major excavation or planning delays.</p>
                        </div>
                        <div className={styles.applicationItem}>
                            <div className={styles.applicationIcon}>🌳</div>
                            <h3>Garden Rooms</h3>
                            <p>Create outdoor studios, offices, or guest houses effortlessly.</p>
                        </div>
                        <div className={styles.applicationItem}>
                            <div className={styles.applicationIcon}>🏗️</div>
                            <h3>Modular Housing</h3>
                            <p>Ideal for prefab and container home installations.</p>
                        </div>
                        <div className={styles.applicationItem}>
                            <div className={styles.applicationIcon}>🪵</div>
                            <h3>Decks & Terraces</h3>
                            <p>Elevated outdoor living spaces with solid support.</p>
                        </div>
                        <div className={styles.applicationItem}>
                            <div className={styles.applicationIcon}>🏕️</div>
                            <h3>Glamping Structures</h3>
                            <p>Tourist accommodations with minimal environmental impact.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.processSection}>
                    <h2>Installation Process</h2>
                    <div className={styles.processSteps}>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Site Assessment</h3>
                                <p>
                                    Evaluate soil conditions and calculate load requirements
                                    for your specific structure.
                                </p>
                            </div>
                        </div>

                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Screw Installation</h3>
                                <p>
                                    Install ground screws using hydraulic equipment precisely
                                    at marked foundation points.
                                </p>
                            </div>
                        </div>

                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Frame Mounting</h3>
                                <p>
                                    Attach floor frames or beams directly to screw brackets -
                                    ready to build immediately.
                                </p>
                            </div>
                        </div>

                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepContent}>
                                <h3>Start Building</h3>
                                <p>
                                    Begin construction the same day with a stable, certified
                                    foundation system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Housing;