import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import About from "./about/About";
import Testimonials from "./testimonials/Testimonials";
import FAQ from "./FAQ/FAQ";
import StatsSection from "./Stats/StatsSection";
import Footer from "../../components/footer/Footer";
import Clock from "../../assets/home/yellowBox/clock-fast.svg";
import Money from "../../assets/home/yellowBox/money.svg";
import Sustainable from "../../assets/home/yellowBox/sustainable.svg";
import Gear from "../../assets/home/yellowBox/gear.svg";

const img1 = "/assets/Process1/2.JPG";
const img2 = "/assets/home/background.png";
const img3 = "/assets/about/back.png";
const img4 = "/assets/installation/2.jpg";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [img1, img2, img4];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={styles.home}>
            {/* Slideshow Background */}
            <div className={styles.slideshowBackground}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${
                            index === currentImageIndex ? styles.active : ""
                        }`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className={styles.navigation}>
                <button
                    className={`${styles.navButton} ${styles.prevButton}`}
                    onClick={handlePrev}
                >
                    <ArrowBackIosIcon sx={{ fontSize: 60 }}/>
                </button>
                <button
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={handleNext}
                >
                    <ArrowForwardIosIcon sx={{ fontSize: 60 }}/>
                </button>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.subheading}>Foundation of the Future</div>
                <div className={styles.description}>
                    Delivering end-to-end solutions for <span>design</span>, <span>supply</span> and <span>installation</span>
                    <br/> of helical piles for all foundationneeds.
                </div>
            </div>
            <div className={styles.yellowBoxContainer}>
                <div className={styles.yellowBox}>
                    <div>
                        <img src={Clock} alt="" className={styles.clock} />
                        <p>Fast & Easy</p>
                    </div>
                    <div>
                        <img src={Money} alt="" className={styles.money} />
                        <p>Affordable</p>
                    </div>
                    <div>
                        <img src={Sustainable} alt="" className={styles.sustainable} />
                        <p>Sustainable</p>
                    </div>
                    <div>
                        <img src={Gear} alt="" className={styles.gear} />
                        <p>Customizable</p>
                    </div>
                </div>
            </div>
            <About />
            <FAQ />
            <StatsSection />
            <Footer />
        </div>
    );
};

export default Home;
