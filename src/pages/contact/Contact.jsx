import React, { useEffect, useRef } from "react";
import styles from "../contact/Contact.module.scss";
import backgroundImage from "/assets/about/back.png";
import Footer from "../../components/footer/Footer.jsx";

const Contact = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Head Office Location: Rabale, Navi Mumbai
  const headOfficeCoords = [19.138156540247024, 73.01443938835511];

  useEffect(() => {
    // Only initialize if map hasn't been created yet
    if (mapRef.current && !mapInstanceRef.current) {
      // Create Leaflet map
      const L = window.L;

      const map = L.map(mapRef.current).setView(headOfficeCoords, 15);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      // Add marker for Head Office
      L.marker(headOfficeCoords)
        .addTo(map)
        .bindPopup("<b>Head Office</b><br>Rabale MIDC, Navi Mumbai")
        .openPopup();

      mapInstanceRef.current = map;
    }

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <div className={styles.contactUs}>
        <div
          className={styles.heroSection}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className={styles.contactTitle}>CONTACT US</h1>
        </div>

        {/* Contact Form Section */}
        <div className={styles.contactFormSection}>
          <div className={styles.contactFormContainer}>
            <div className={styles.contactFormContent}>
              <h2>
                Get in <span>Touch</span>
              </h2>
              <p>
                Want to get started on your next project? Maybe a new
                construction idea? Let's get started!
              </p>

              <form className={styles.contactForm}>
                <div className={styles.inputField}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name *"
                    required
                  />
                </div>

                <div className={styles.inputField}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email *"
                    required
                  />
                </div>

                <div className={styles.inputField}>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number *"
                    required
                  />
                </div>

                <div className={styles.inputField}>
                  <select id="howDidYouFindUs" name="howDidYouFindUs" required>
                    <option value="" disabled selected>
                      How did you find us?
                    </option>
                    <option value="socialMedia">Social Media</option>
                    <option value="wordOfMouth">Word of Mouth</option>
                    <option value="searchEngine">Search Engine</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button type="submit" className={styles.submitButton}>
                  SEND
                </button>
              </form>
            </div>

            <div className={styles.contactMap}>
              <div
                ref={mapRef}
                className={styles.mapContainer}
                style={{
                  width: "100%",
                  height: "580px",
                  borderRadius: "8px",
                  zIndex: 1,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <svg
            width="42"
            height="40"
            viewBox="0 0 47 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_24_1462)">
              <path
                d="M24.5398 3.08984L40.1165 17.2502H34.4183L23.2498 7.09759L11.7498 17.553V36.4168H21.3332V40.2502H9.83317C9.32484 40.2502 8.83733 40.0482 8.47788 39.6888C8.11844 39.3293 7.9165 38.8418 7.9165 38.3335V21.0835H2.1665L21.9599 3.08984C22.3128 2.76875 22.7727 2.59082 23.2498 2.59082C23.7269 2.59082 24.1869 2.76875 24.5398 3.08984ZM27.0832 21.0835H44.3332V34.5002H27.0832V21.0835ZM30.9165 24.9168V30.6668H40.4998V24.9168H30.9165ZM46.2498 40.2502H25.1665V36.4168H46.2498V40.2502Z"
                fill="#353535"
              />
            </g>
            <defs>
              <clipPath id="clip0_24_1462">
                <rect
                  width="46"
                  height="46"
                  fill="white"
                  transform="translate(0.25)"
                />
              </clipPath>
            </defs>
          </svg>

          <div>
            <p className={styles.p1}>Head Office</p>
            <p className={styles.p2}>Navi Mumbai, Maharashtra 400701</p>
          </div>
        </div>
        <div className={styles.card}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 47 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3562 8.42871V11.5604L3.49902 17.9778V44.5716H42.9276V17.9778L33.0705 11.5604V8.42871H13.3562ZM16.6419 11.7144H29.7847V24.3439L23.2133 28.605L16.6419 24.3439V11.7144ZM18.2847 15.0001V18.2859H28.1419V15.0001H18.2847ZM13.3562 15.4622V22.1876L8.1709 18.8506L13.3562 15.4622ZM33.0705 15.4622L38.2557 18.8506L33.0705 22.1876V15.4622ZM18.2847 19.9287V23.2144H28.1419V19.9287H18.2847ZM6.78474 21.8796L23.2133 32.5068L39.6419 21.8796V41.2859H6.78474V21.8796Z"
              fill="#353535"
            />
          </svg>

          <div>
            <p className={styles.p1}>Email</p>
            <p className={styles.p2}>sales@bigscrew.in</p>
          </div>
        </div>
        <div className={styles.card}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 54 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.1246 8V10.7549C33.0538 10.7549 35.798 11.4436 38.3572 12.8211C40.793 14.1698 42.7355 15.9778 44.1847 18.2448C45.6647 20.6267 46.4047 23.1807 46.4047 25.9069H49.3647C49.3647 22.6642 48.486 19.651 46.7285 16.8674C45.0326 14.1698 42.7355 12.0319 39.8372 10.4536C36.8463 8.81786 33.6088 8 30.1246 8ZM14.8157 12.1324C13.9832 12.1324 13.2586 12.3763 12.6419 12.8641L7.87816 17.3839L8.01691 17.2978C7.24607 17.9005 6.73732 18.6466 6.49065 19.5362C6.27481 20.4258 6.33648 21.2867 6.67565 22.1189C7.53899 24.3573 8.69525 26.653 10.1444 29.0062C12.1794 32.2489 14.5999 35.1617 17.4057 37.7444C21.9074 41.9629 27.5037 45.2917 34.1946 47.731H34.2409C35.135 48.0179 36.0292 48.0753 36.9234 47.9031C37.8484 47.731 38.6655 47.3579 39.3747 46.784L44.046 42.4364C44.6626 41.8624 44.971 41.1594 44.971 40.3271C44.971 39.4662 44.6626 38.7488 44.046 38.1749L37.9872 32.4929C37.3705 31.9189 36.5996 31.632 35.6746 31.632C34.7496 31.632 33.9788 31.9189 33.3621 32.4929L30.4483 35.2478C28.105 34.2147 26.07 32.9377 24.3433 31.4167C22.6166 29.8671 21.2445 27.9874 20.227 25.7778L23.187 23.0229C23.8345 22.3915 24.1583 21.6454 24.1583 20.7845C24.1583 19.8949 23.7883 19.1775 23.0483 18.6322L23.187 18.7614L16.9895 12.8641C16.3728 12.3763 15.6482 12.1324 14.8157 12.1324ZM30.1246 13.5098V16.2647C32.0054 16.2647 33.7321 16.6952 35.3046 17.5561C36.908 18.417 38.1722 19.5936 39.0972 21.0858C40.0222 22.5494 40.4847 24.1564 40.4847 25.9069H43.4447C43.4447 23.6685 42.8434 21.588 41.6409 19.6653C40.4384 17.8 38.8351 16.3078 36.8309 15.1886C34.765 14.0694 32.5296 13.5098 30.1246 13.5098ZM14.8157 14.8873C14.9082 14.8873 15.0161 14.9303 15.1395 15.0164L21.1983 20.7845C21.2291 20.8993 21.1983 20.9997 21.1058 21.0858L16.712 25.1321L17.0357 25.993L17.637 27.1983C18.1303 28.174 18.7007 29.121 19.3483 30.0393C20.2424 31.3306 21.2291 32.4355 22.3083 33.3538C23.7575 34.6738 25.4996 35.8791 27.5346 36.9696C28.5521 37.5148 29.4154 37.9166 30.1246 38.1749L31.0496 38.5623L35.5359 34.3869C35.5976 34.3295 35.6438 34.3008 35.6746 34.3008C35.7055 34.3008 35.7517 34.3295 35.8134 34.3869L42.0572 40.198C42.1189 40.2554 42.1497 40.2984 42.1497 40.3271C42.1497 40.3271 42.1189 40.3558 42.0572 40.4132L37.4321 44.6747C36.7538 45.22 36.0138 45.3635 35.2121 45.1052C28.9221 42.8381 23.6804 39.7389 19.487 35.8074C16.897 33.3968 14.6307 30.6563 12.6882 27.5857C11.3007 25.376 10.2215 23.2381 9.45067 21.1719V21.1289C9.32734 20.8706 9.31192 20.5693 9.40442 20.2249C9.49692 19.8519 9.66651 19.5649 9.91318 19.364L14.492 15.0164C14.5845 14.9303 14.6924 14.8873 14.8157 14.8873ZM30.1246 19.0196V21.7745C31.3579 21.7745 32.4063 22.1763 33.2696 22.9798C34.133 23.7833 34.5646 24.759 34.5646 25.9069H37.5247C37.5247 24.6729 37.1855 23.5251 36.5071 22.4633C35.8596 21.4015 34.9655 20.5693 33.8246 19.9666C32.6838 19.3353 31.4504 19.0196 30.1246 19.0196Z"
              fill="#353535"
            />
          </svg>
          <div>
            <p className={styles.p1}>Call</p>
            <p className={styles.p2}>+91 99879 95568</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
