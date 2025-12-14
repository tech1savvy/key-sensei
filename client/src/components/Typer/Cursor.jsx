import styles from "./Cursor.module.css";

function Cursor({ position, isVisible }) {
  const style = {
    ...position,
    opacity: isVisible ? 1 : 0,
  };
  return <div id="cursor" className={styles.cursor} style={style}></div>;
}

export default Cursor;
