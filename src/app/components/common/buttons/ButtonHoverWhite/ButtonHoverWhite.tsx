import React from "react";
import { Button } from "react-bootstrap";
import styles from "./ButtonHoverWhite.module.scss";

function ButtonHoverWhite({ text = "" }) {
  return (
    <div>
      <Button variant="primary"  className={styles['button-custom']} onClick={() => console.log("Shop Now")}>
        {text}
      </Button>
    </div>
  );
}

export default ButtonHoverWhite;
