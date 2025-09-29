import React from "react";
import styles from "./OurTeam.module.scss";
import Footer from "../../../components/footer/Footer";

const TEAM_MEMBERS = [
  {
    name: "Name",
    designation: "Designation",
    linkedin: "LinkedIn And",
    email: "Email ID",
    image: "https://avatar.iran.liara.run/public/boy",
  },
  {
    name: "Name",
    designation: "Designation",
    linkedin: "LinkedIn And",
    email: "Email ID",
    image: "https://avatar.iran.liara.run/public/boy",
  },
  {
    name: "Name",
    designation: "Designation",
    linkedin: "LinkedIn And",
    email: "Email ID",
    image: "https://avatar.iran.liara.run/public/boy",
  },
  {
    name: "Name",
    designation: "Designation",
    linkedin: "LinkedIn And",
    email: "Email ID",
    image: "https://avatar.iran.liara.run/public/boy",
  },
];

const OurTeam = () => (
  <div className={styles.teamWrapper}>
    <div className={styles.header}>
      <h2>OUR TEAM</h2>
      <div className={styles.subheading}>CORE TEAM</div>
    </div>
    <div className={styles.membersSection}>
      {TEAM_MEMBERS.map((member, idx) => (
        <div className={styles.teamCard} key={idx}>
          <div className={styles.hexagon}>
            <img src={member.image} alt="team-avatar" />
          </div>
          <div className={styles.memberInfo}>
            <div>{member.name}</div>
            <div>{member.designation}</div>
            <div>{member.linkedin}</div>
            <div>{member.email}</div>
          </div>
        </div>
      ))}
    </div>
    <div className={styles.description}>
      <p>
        At BIGSCREW, our team is made up of dedicated professionals with
        expertise in engineering, construction, and sustainable <br />{" "}
        foundations. We share a common goal—to provide reliable, eco-friendly,
        and innovative ground screw solutions that replace <br /> traditional
        concrete foundations. With a customer-first approach and years of
        hands-on experience, our team ensures every project is <br /> delivered
        with precision, efficiency, and care for the environment.
      </p>
    </div>
  </div>
);

export default OurTeam;
