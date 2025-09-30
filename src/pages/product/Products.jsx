import React, {useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../product/Product.module.scss";
import backgroundImage from "../../assets/about/about-wallpaper.png";
import image1 from "../../assets/product/image15.png"
import image2 from "../../assets/product/image16.png"
import screw1 from "../../assets/product/screw1.png"
import screw2 from "../../assets/product/screw2.png"
import screw3 from "../../assets/product/screw3.png"
import screw4 from "../../assets/product/screw4.png"
import dummy1 from "../../assets/product/dummy1.png"
import Footer from "../../components/footer/Footer.jsx";
const Products = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // animation triggers while image is in view
  });

  // Fade in/out at different scroll positions
  const topOpacity = useTransform(scrollYProgress, [0.2, 0.35], [1, 0]); // fades out after 30%
  const centerOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]); // fades in between 30%-60%
  const centerBottomOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]); // fades in between 30%-60%
  const bottomOpacity = useTransform(scrollYProgress, [0.61, 0.7], [0, 1]); // fades in at bottom

  const MyIcon1 = ({width = "57", height = "57"}) => (
      <svg width={width} height={height} viewBox="0 0 65 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.794853 20.3936C0.677038 16.977 2.66007 13.8357 5.7952 12.4726L29.1909 2.30055C31.308 1.38008 33.7122 1.38008 35.8293 2.30055L59.4153 12.5553C62.4547 13.8768 64.4206 16.8753 64.4206 20.1895V48.9419C64.4206 51.8248 62.929 54.5025 60.4777 56.0199L39.2346 69.1704C36.7796 70.6902 33.7126 70.8293 31.1301 69.5381L6.4132 57.1796C3.68523 55.8156 1.92159 53.069 1.81648 50.0208L0.794853 20.3936Z"
            fill="#F9C50D"/>
        <path d="M20.0634 39.7075L29.2915 46.6453L50.5987 24.443" stroke="white" strokeWidth="5.54965"
              strokeLinecap="round"/>
      </svg>
  );

  const MyIcon2 = ({width = "57", height = "57"}) => (
      <svg width={width} height={height} viewBox="0 0 65 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.814119 20.3263C0.695875 16.8972 2.68613 13.7445 5.83268 12.3764L29.3137 2.16716C31.4385 1.24332 33.8516 1.24332 35.9764 2.16716L59.6484 12.4594C62.6988 13.7857 64.6719 16.7951 64.6719 20.1214V48.9787C64.6719 51.8721 63.1749 54.5596 60.7147 56.0826L39.394 69.281C36.9302 70.8062 33.8519 70.9459 31.2601 69.6499L6.45298 57.2465C3.71505 55.8775 1.94497 53.1209 1.83947 50.0616L0.814119 20.3263Z"
            fill="#F9C50D"/>
        <path d="M45.1777 22.999L20.1132 50.8485" stroke="white" strokeWidth="5.56989" strokeLinecap="round"/>
        <path d="M20.1128 22.999L45.1773 50.8485" stroke="white" strokeWidth="5.56989" strokeLinecap="round"/>
      </svg>
  );
  return <>
    <div className={styles.product}>
      <div
          className={styles.heroSection}
          style={{backgroundImage: `url(${backgroundImage})`}}
      >
        <h1 className={styles.productTitle}>PRODUCTS</h1>
      </div>

      <div className={styles.section}>
        <p>Ground Screw</p>
        <h3>V/s</h3>
        <p>Helical Pipes</p>
      </div>

      <div className={styles.center}>
        <img src={image1} alt="Image 1"/>
        <div className={styles.middleContainer}>
          <div className={styles.middle}>
            <MyIcon1/>

            <p>Galvanized</p>

            <MyIcon2/>
          </div>
          <div className={styles.middle}>
            <MyIcon1/>

            <p>Greater Depth</p>

            <MyIcon2/>
          </div>
          <div className={styles.middle}>
            <MyIcon1/>

            <p>Works in all soil types</p>

            <MyIcon2/>
          </div>
          <div className={styles.middle}>
            <MyIcon1/>

            <p>Quick Installation</p>

            <MyIcon2/>
          </div>
          <div className={styles.middle}>
            <MyIcon1/>

            <p>High Load Capacity</p>

            <MyIcon2/>
          </div>
          <div className={styles.middle}>
            <MyIcon1/>

            <p>Onsite Welding Possible</p>

            <MyIcon2/>
          </div>
          <div className={styles.middle}>
            <MyIcon1/>

            <p>Reusable/Removable</p>

            <MyIcon2/>
          </div>
          <div className={styles.middle}>
            <MyIcon1/>

            <p>Best For Heavy Structures</p>

            <MyIcon2/>
          </div>
          <div className={styles.middle}>
            <MyIcon1/>

            <p>Higher Cost</p>

            <MyIcon2/>
          </div>
          <div className={styles.middle}>
            <MyIcon1/>

            <p>Lower Cost</p>

            <MyIcon2/>
          </div>
        </div>
        <img src={image2} alt="Image 2"/>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.center1}>
          <img src={image2} ref={ref} alt="Carbon Steel Pipe"/>
        </div>

        {/* Top Animation */}
        <motion.div style={{opacity: topOpacity}} className={styles.annotation}>
          <div className={styles.pack}>
            <div className={styles.circle}></div>
            <p>CARBON STEEL ROUND PIPE</p>
          </div>

          <p>Carbon Steel Round Pipe, Strong carbon steel pipes (68-115) with hot-dip galvanization
            for rust-free, long-lasting performance.</p>

        </motion.div>

        <motion.div style={{opacity: centerOpacity}} className={styles.annotation1}>
          <div className={styles.pack}>
            <div className={styles.circle}></div>
            <p>TOP CONNECTION FLANGE</p>
          </div>

          <p>Engineered for secure load mounting with two options: nut lock
          or flanged connection.</p>

        </motion.div>

        <motion.div style={{opacity: centerBottomOpacity}} className={styles.annotation2}>
          <div className={styles.pack}>
            <div className={styles.circle}></div>
            <p>SPIRAL HELIX</p>
          </div>

          <p>Engineered for secure load mounting with two options: nut lock
          or flanged connection</p>

        </motion.div>

        <motion.div style={{opacity: bottomOpacity}} className={styles.annotation3}>
          <div className={styles.pack}>
            <div className={styles.circle}></div>
            <p>FORGED TIP</p>
          </div>

          <p>Hot-formed conical tip built tough to penetrate rocky and
          dense soils with ease.</p>

        </motion.div>
      </div>

      <div className={styles.center2}>
        <h2>PRODUCTS</h2>
        <div className={styles.first}>
          <p>Fixed Flange</p>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <img src={screw1} alt="Screw 1"/>
              <p>076</p>
            </div>
            <div className={styles.card}>
              <img src={screw2} alt="Screw 2"/>
              <p>089</p>
            </div>
            <div className={styles.card}>
              <img src={screw3} alt="Screw 3"/>
              <p>0114</p>
            </div>
            <div className={styles.card}>
              <img src={screw4} alt="Screw 4"/>
              <p>0140</p>
            </div>
          </div>
        </div>

        <div className={styles.first}>
          <p>Extendables</p>
          <div className={styles.cardContainer}>
            <div className={styles.card}>

            </div>
            <div className={styles.card}>

            </div>
            <div className={styles.card}>

            </div>
            <div className={styles.card}>

            </div>
          </div>
        </div>
      </div>

      <div className={styles.center3}>
        <h2>CASE STUDY</h2>

        <div className={styles.parent1}>
          <div className={styles.child1}>
            <img src={dummy1} alt="Image"/>
          </div>
          <article className={styles.child2}>
            If you've worked with ground screws before, chances are we made them. We were
            one of the world's first manufacturers of the technology and we continue to set
            the global standard for quality and performance. Our approach is built on collaboration
            : we share our knowledge and best practices with an international networks of engineers,
            manufacturers, and building professionals. Our attention to detail and focused collaboration
            allows us to offer reliable, reputable solutions supported by our expert services.
            American Ground Screw is just not ground anchors and anchor screws; we are also a
            resource of knowledge and advancement for all those seeking up-to-code engineering solutions.
          </article>
        </div>

        <div className={styles.parent2}>
          <article className={styles.child2}>
            If you've worked with ground screws before, chances are we made them. We were
            one of the world's first manufacturers of the technology and we continue to set
            the global standard for quality and performance. Our approach is built on collaboration
            : we share our knowledge and best practices with an international networks of engineers,
            manufacturers, and building professionals. Our attention to detail and focused collaboration
            allows us to offer reliable, reputable solutions supported by our expert services.
            American Ground Screw is just not ground anchors and anchor screws; we are also a
            resource of knowledge and advancement for all those seeking up-to-code engineering solutions.
          </article>
          <div className={styles.child1}>
            <img src={dummy1} alt="Image"/>
          </div>
        </div>
      </div>

      <div className={styles.center4}>
        <h2>EXPERIMENTS</h2>

        <div className={styles.parent}>
          <article className={styles.child2}>
            If you've worked with ground screws before, chances are we made them. We were
            one of the world's first manufacturers of the technology and we continue to set
            the global standard for quality and performance. Our approach is built on collaboration
            : we share our knowledge and best practices with an international networks of engineers,
            manufacturers, and building professionals. Our attention to detail and focused collaboration
            allows us to offer reliable, reputable solutions supported by our expert services.
            American Ground Screw is just not ground anchors and anchor screws; we are also a
            resource of knowledge and advancement for all those seeking up-to-code engineering solutions.
          </article>
          <div className={styles.child1}>
            <img src={dummy1} alt="Image"/>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  </>
};

export default Products;
