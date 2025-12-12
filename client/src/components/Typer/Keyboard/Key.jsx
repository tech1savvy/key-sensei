import { memo, useContext } from "react";
import styles from "./Key.module.css";
import KeyPressContext from "../../../contexts/KeyPressContext";

const Key = memo(({ id, value, keyClassName }) => {
  const { pressedKeys } = useContext(KeyPressContext);

  const isPressed = pressedKeys.has(id);
  const computedClassName = `${styles.key} ${keyClassName} ${isPressed ? styles.pressed : ""}`;

  return (
    <div id={id} className={computedClassName}>
      {value}
    </div>
  );
});

export default Key;
