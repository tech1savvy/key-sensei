import styles from "./Letter.module.css";

const Letter = ({ key, char, status, isCurrentLetter }) => {
  const classNames = [styles.letter, styles[status]];
  if (isCurrentLetter) {
    classNames.push("current");
  }

  return (
    <span id={key} className={classNames.join(" ")}>
      {char}
    </span>
  );
};

export default Letter;
