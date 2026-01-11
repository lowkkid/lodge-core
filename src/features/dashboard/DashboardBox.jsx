import styles from "./DashboardBox.module.css";

function DashboardBox({ children, className }) {
  const finalClassName = styles["dashboard-box"] + " " + className;
  return <div className={finalClassName}>{children}</div>;
}

export default DashboardBox;
