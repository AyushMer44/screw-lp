import styles from "./StatsSection.module.scss";

const data = [
  { value: "17+", label: "Satisfied Client" },
  { value: "96%", label: "Customer Satisfaction" },
  { value: "19+", label: "Success Projects" },
];

const StatsSection = () => (
  <div className={styles.statsContainer}>
    {data.map((stat, idx) => (
      <div className={styles.statBlock} key={idx}>
        <div className={styles.statValue}>{stat.value}</div>
        <div className={styles.statLabel}>{stat.label}</div>
      </div>
    ))}
  </div>
);

export default StatsSection;
