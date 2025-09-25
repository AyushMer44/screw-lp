import React from "react";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
  const testimonials = [
    {
      pfp: "https://i.pravatar.cc/96?img=1",
      name: "Alex Carter",
      testimonial:
        "This product exceeded my expectations completely.\nSetup was incredibly quick and effortless.\nThe user interface feels clean and responsive.\nCustomer support resolved my issue very fast.\nPerformance has been consistently reliable.\nGreat value for all the features offered.\nI would definitely recommend it to colleagues.",
    },
    {
      pfp: "https://i.pravatar.cc/96?img=2",
      name: "Sophia Johnson",
      testimonial:
        "Amazing experience overall. Everything worked smoothly.\nUI feels modern and intuitive.\nSupport was super quick and helpful.\nHighly reliable product.\nWould recommend without hesitation.",
    },
    {
      pfp: "https://i.pravatar.cc/96?img=3",
      name: "Liam Martinez",
      testimonial:
        "The setup process was seamless and fast.\nGreat design, very user-friendly.\nCustomer support went above and beyond.\nExcellent performance and stability.\nWorth every penny.",
    },
    {
      pfp: "https://i.pravatar.cc/96?img=4",
      name: "Olivia Brown",
      testimonial:
        "Absolutely fantastic tool.\nIt makes my work much easier.\nThe performance is top-notch.\nCustomer service is always ready to help.\nI recommend it to anyone looking for efficiency.",
    },
    {
      pfp: "https://i.pravatar.cc/96?img=5",
      name: "Noah Wilson",
      testimonial:
        "This service has been a game changer.\nExtremely easy to use.\nResponsive design works perfectly across devices.\nThe reliability is impressive.\nWould suggest to friends and team members.",
    },
    {
      pfp: "https://i.pravatar.cc/96?img=11",
      name: "Emma Davis",
      testimonial:
        "The whole setup was effortless.\nUI feels sleek and polished.\nSupport team handled my queries really quickly.\nPerformance is rock solid.\nSuch a valuable product.",
    },
    {
      pfp: "https://i.pravatar.cc/96?img=7",
      name: "Mason Taylor",
      testimonial:
        "Extremely satisfied with the experience.\nEasy to understand and navigate.\nCustomer service is excellent.\nFast and reliable performance.\nHighly recommended.",
    },
    {
      pfp: "https://i.pravatar.cc/96?img=8",
      name: "Ava Anderson",
      testimonial:
        "The interface is clean and very responsive.\nSetup was quick.\nAny issues were resolved by support instantly.\nPerformance has been great so far.\nTotally worth it.",
    },
    {
      pfp: "https://i.pravatar.cc/96?img=9",
      name: "Ethan Thomas",
      testimonial:
        "This exceeded my expectations.\nSmooth installation process.\nCustomer support was super responsive.\nProduct has been reliable since day one.\nWould definitely recommend to others.",
    },
  ];

  return (
    <div className={styles.testimonials}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <p>CLIENT'S TESTIMONIALS</p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.testimonialContainer}>
            <div className={styles.testimonialDetails}>
              <img src={t.pfp} alt={t.name} className={styles.pfp} />
              <p className={styles.name}>{t.name}</p>
            </div>
            <p className={styles.testimonialText}>{t.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
