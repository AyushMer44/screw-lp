import React from "react";
import styles from "./ProcessGroundScrew.module.scss";

const GroundScrewProcess = () => {
  const bgSoil = "/assets/process/soil.jpg";
  const img1 = "/assets/process/step1.jpg";
  const img2 = "/assets/process/step2.jpg";
  const img3 = "/assets/process/step3.png";
  const img4 = "/assets/process/step4.jpg";
  const processes = [
    {
      id: 1,
      title: "Subsoil Evaluation",
      description:
        "A geotechnical engineer must perform a subsoil survey before construction to assess soil composition, load-bearing capacity, and layer structure.",
      image: img1,
    },
    {
      id: 2,
      title: "Foundation Planning",
      description:
        "Using the geological survey, load data, and structural analysis, the static planning of the foundation begins. This includes selecting the appropriate ground screw type and determining the required number of screws for the project.",
      image: img2,
    },
    {
      id: 3,
      title: "Load-Bearing Capacity Test",
      description:
        "Load-bearing capacity tests validate structural design estimates and determine installation parameters such as minimum torque.",
      image: img3,
    },
    {
      id: 4,
      title: "Installation and Documentation",
      description:
        "After the load-bearing capacity tests are approved by a structural engineer, installation begins. Ground screw positions are determined, and the screws are installed by a skilled operator using an electric or hydraulic driver.",
      image: img4,
    },
  ];

  return (
    <div className={styles.card}>
      <img src={bgSoil} alt="Background Image" className={styles.bgImage} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Process for a Foundation Construction with{" "}
            <span className={styles.highlight}>Ground Screw</span>
          </h1>
          <p className={styles.subtitle}>
            Step-by-step process for reliable ground screw foundation
          </p>
        </header>

        <div className={styles.processList}>
          {processes.map((process) => (
            <div key={process.id} className={styles.processItem}>
              <div>
                <h2 className={styles.processTitle}>
                  {process.id}. {process.title}
                </h2>
                <p className={styles.processDescription}>
                  {process.description}
                </p>
              </div>
              <div className={styles.hexagon}>
                <img
                  src={process.image}
                  alt={process.title}
                  className={styles.processImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroundScrewProcess;
