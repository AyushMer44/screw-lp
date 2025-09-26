import React, { useState } from "react";
import styles from "./FAQ.module.scss";

const faqData = [
  {
    q: "How do I determine what size and type of ground screw I need?",
    a: "The size of ground screw is determined by the load requirements of your project. You can check out our Product line. The type of ground screw is determined by the connection to your structure. A Model 3, open top screw, is used when a pipe is inserted into the ground screw and the structure is built off the pipe. A solar ground mount system is one example. A flange design is used to when you are connecting to columns, posts, beams, etc. We have several flat and U-flange models available as well as custom manufacturing capabilities.",
  },
  {
    q: "For what types of applications do you use ground screws?",
    a: "Ground screws are used for solar mount systems, fencing, decks, signage bases, tiny housing, and more.",
  },
  {
    q: "Can ground screws be installed if I hit obstructions below grade?",
    a: "Depending on the obstruction, installation may require pre-drilling or choosing an alternate location.",
  },
  {
    q: "Can ground screws be removed/re-used?",
    a: "Yes, ground screws can be unscrewed and re-used in many cases if the structural integrity is maintained.",
  },
  {
    q: "How long do ground screws last?",
    a: "With proper installation and normal conditions, ground screws can last over 25 years thanks to galvanized protection.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className={styles.FAQ}>
      <div className={styles.left}>
        <div className={styles.heading}>
          <div className={styles.title}>FAQ</div>
          <div className={styles.bar}></div>
        </div>
      </div>
      <div className={styles.right}>
        {faqData.map((item, idx) => (
          <div key={idx} className={styles.faqItem}>
            <div
              className={styles.questionRow}
              onClick={() => handleToggle(idx)}
            >
              <span>{`Q. ${item.q}`}</span>
              <button className={styles.iconBtn}>
                {openIdx === idx ? (
                  <img
                    src="/src/assets/home/FAQ/minus.svg"
                    className={styles.minus}
                  />
                ) : (
                  <img
                    src="/src/assets/home/FAQ/plus.svg"
                    className={styles.plus}
                  />
                )}
              </button>
            </div>
            {openIdx === idx && (
              <div className={styles.answerRow}>{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
