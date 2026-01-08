import styles from "./Heading.module.css";

const tagMap = {
  lg: "h1",
  md: "h2",
  sm: "h3",
};

function Heading({ size, children, ...props }) {
  const className = `${styles["heading"]} ${styles[`heading--${size}`]}`;
  const Tag = tagMap[size] || "h3";

  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
